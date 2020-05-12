const DirectoryModel = require('./../models/Directory')
const _get = require('lodash/get')

class Directory {
  constructor (data) {
    Object.keys(data).forEach(k => this[k] = data[k]);
  }
  
  async create (data) {
    let result
    let idChannel = _get(data, 'channel', '')
    let username = _get(this.op, '[1].required_posting_auths[0]', null)
    if(typeof idChannel !== 'string') return;

    try {
      let checkUser = await DirectoryModel.query().findOne({ channel: idChannel, username })
      if(checkUser) { return; }
      result = await DirectoryModel.query().insert({ id: this.transaction_id, channel: idChannel, username })
    } catch (error) {
      console.log(error)
    }
    return result;
  }

}

module.exports = Directory
