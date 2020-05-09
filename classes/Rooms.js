const RoomsModel = require('./../models/Rooms')
const _get = require('lodash/get')
const { trxUserComare } = require('./../utils')

class Rooms {
  constructor (data) {
    Object.keys(data).forEach(k => this[k] = data[k]);
  }
  async create (data) {
    let result
    let idChannel = _get(data, 'channel', '')
    let metaData = _get(data, 'data', '')
    if(typeof idChannel !== 'string') return;
    
    try {
      if(await trxUserComare(idChannel, this.op)) return;
      result = await RoomsModel.query().insert({
        channel: idChannel,
        meta_data: JSON.stringify(metaData),
        id: this.transaction_id
      })
    } catch (error) {
      console.log(error)
    }
    return result
  }

  async  update (data) {
    let result
    let idRoom = _get(data, 'room', '')
    let newData = _get(data, 'data', '')
    if(typeof idRoom !== 'string') return;

    try {
      if(await trxUserComare(idRoom, this.op)) return;
      result = await RoomsModel.query().update({
        last_update: this.transaction_id,
        meta_data: JSON.stringify(newData)
      }).where({ id: idRoom  })
    } catch (error) {
      console.log(error)
    }
    return result
  }
  
  async delete () {
    let result
    let idRoom = _get(data, 'room', '')
    if(typeof idChannel !== 'string') return;

    try {
      if(await trxUserComare(idRoom, this.op)) return;
      result = await RoomsModel.query().delete().where({ id: idRoom })
    } catch (error) {
      console.log(error)
    }
    return result
  }
}

module.exports = Rooms
