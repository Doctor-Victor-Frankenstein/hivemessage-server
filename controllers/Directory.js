const DirectoryModel = require('./../models/Directory')

class Directory {
  constructor () {
  }

  async user (req, res) {
    let { username } = req.params
    let result = null
    try {
      result = await DirectoryModel.query().where({ username })
    } catch (error) {
      console.log(error)
    }
    if (!result) { return res.status(404).json({ success: false, data: null }) }
    return res.json({ success: true, data: result })
  }

  async channel (req, res) {
    let { id } = req.params
    let { offset = 0 } = req.query
    let result = null
    try {
      result = await DirectoryModel.query().where({ channel: id }).limit(30).offset(offset)
    } catch (error) {
      console.log(error)
    }
    if (!result) { return res.status(404).json({ success: false, data: null }) }
    return res.json({ success: true, data: result })
  }
}

const directory = new Directory()

module.exports = { directory }
