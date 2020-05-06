const RoomsModel = require('./../models/Rooms')

class Rooms {
  constructor () {
  }
  async channel (req, res) {
    let { id } = req.params
    let result = null
    try {
      result = await RoomsModel.query().where({ channel: id })
    } catch (error) {
      console.log(error)
    }

    if (!result) {
      return res.status(404).json({ success: false, data: null })
    }
    return res.json({ success: true, data: result })
  }
}

const rooms = new Rooms()

module.exports = { rooms }
