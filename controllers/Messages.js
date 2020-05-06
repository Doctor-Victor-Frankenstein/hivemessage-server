const MessagesModel = require('./../models/Messages')

class Messages {
  constructor (data) {
  }
  async room (req, res) {
    let { id } = req.params
    let result = null
    try {
      result = await MessagesModel.query().where({ room: id })
    } catch (error) {
      console.log(error)
    }

    if (!result) {
      return res.status(404).json({ success: false, data: null })
    }
    return res.json({ success: true, data: result })
  }
}

const messages = new Messages()

module.exports = { messages }
