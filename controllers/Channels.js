const ChannelsModel = require('../models/Channels')

class Channels {
  constructor () {
  }

  async findChannel (req, res) {
    let { id } = req.params
    let result = null
    try {
      result = await ChannelsModel.query().findById(id)
    } catch (error) {
      console.log(error)
    }

    if (!result) {
      return res.status(404).json({ success: false, data: null })
    }
    return res.json({ success: true, data: result })
  }
}

const channels = new Channels()

module.exports = { channels }
