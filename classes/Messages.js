const MessagesModel = require('./../models/Messages')
const RoomsModel = require('./../models/Rooms')
const DirectoryModel = require('./../models/Directory')
const _get = require('lodash/get')

class Messages {
  constructor (data) {
    Object.keys(data).forEach(k => this[k] = data[k]);
  }
  
  async create (data) {
    let result, directory, rooms
    let idRoom = _get(data, 'room', '')
    let username = _get(this.op, '[1].required_posting_auths[0]', null)
    let metaData = _get(data, 'data', {})
    if(typeof idRoom !== 'string') return;

    try {
      rooms = await RoomsModel.query().where({ id: idRoom })
      directory = await DirectoryModel.query().where({ username, channel: _get(rooms, '[0]channel', null) })
      if(directory.length===0) return;
      result = await MessagesModel.query().insert({
        id: this.transaction_id,
        username,
        meta_data: JSON.stringify(metaData),
        room: idRoom
      })
    } catch (error) {
      console.log(error)
    }
    return result
  }

}

module.exports = Messages
