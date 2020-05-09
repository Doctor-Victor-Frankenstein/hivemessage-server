const ChannelsModel = require('./../models/Channels')
const _get = require('lodash/get')
const { trxUserComare } = require('./../utils')

class Channels {
  constructor (data) {
    Object.keys(data).forEach(k => this[k] = data[k]);
  }
  async create (meta_data) {
    let result
    try {
      result = await ChannelsModel.query().insert({
        id: this.transaction_id,
        block_num: this.block_num,
        block_id: this.block_id,
        username: _get(this.op, '[1].required_posting_auths[0]', null),
        meta_data: JSON.stringify(meta_data)
      })
    } catch (error) {
      console.log(error)
    }
    return result;
  }

  async update (data) {
    let result
    let idChannel = _get(data, 'channel', '')
    let metaData = _get(data, 'data', {})
    if(typeof idChannel !== 'string') return;

    try {
      if(await trxUserComare(idChannel, this.op)) return;
      result = await ChannelsModel.query().update({
        last_update: this.transaction_id,
        meta_data: JSON.stringify(metaData)
      }).where({ id: idChannel  })
    } catch (error) {
      console.log(error)
    }
    return result
  }
  
  async delete () {
    let result
    let idChannel = _get(data, 'channel', '')
    if(typeof idChannel !== 'string') return;

    try {
      if(await trxUserComare(idChannel, this.op)) return;
      result = await ChannelsModel.query().delete().where({ id: idChannel })
    } catch (error) {
      console.log(error)
    }
    return result
  }
}

module.exports = Channels
