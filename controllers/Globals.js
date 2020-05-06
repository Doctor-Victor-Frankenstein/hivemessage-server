const GlobalsModel = require('./../models/Globals')

class Globals {
  constructor () {
  }

  async all (req, res) {
    let result = null
    try {
      result = await GlobalsModel.query().select('*')
    } catch (error) {
      console.log(error)
    }

    if (!result) {
      return res.status(404).json({ success: false, data: null })
    }
    return res.json({ success: true, data: result })
  }
}

const globals = new Globals()

module.exports = { globals }