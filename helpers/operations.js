const { tryParse } = require('./../utils')
// classes
const Rooms = require('./../classes/Rooms')
const Messages = require('./../classes/Messages')
const Channels = require('./../classes/Channels')
const Directory = require('./../classes/Directory')

async function operations(op, block_num, block_id, previous_block_id, transaction_id, block_time) {
  const FULL_OP = { op, block_num, block_id, previous_block_id, transaction_id, block_time }
  if(op[0] === 'custom_json' && op[1].id === 'hivemessage') {
    let result = tryParse(op[1].json)
    
    // channels functions
    if (Array.isArray(result) && result[0] === 'createChannel') {
      let channels = new Channels(FULL_OP)
      return channels.create(result[1]);
    }
    if (Array.isArray(result) && result[0] === 'updateChannel') {
      let channels = new Channels(FULL_OP)
      return channels.update(result[1])
    }

    // rooms functions
    if (Array.isArray(result) && result[0] === 'createRoom') {
      let rooms = new Rooms(FULL_OP)
      return rooms.create(result[1])
    }
    if (Array.isArray(result) && result[0] === 'updateRoom') {
      let rooms = new Rooms(FULL_OP)
      return rooms.update(result[1])
    }
    if (Array.isArray(result) && result[0] === 'deleteRoom') {
      let rooms = new Rooms(FULL_OP)
      return rooms.delete(result[1])
    }

    // message functions
    if (Array.isArray(result) && result[0] === 'messageRoom') {
      let messages = new Messages(FULL_OP)
      return messages.create(result[1])
    }

    // message functions
    if (Array.isArray(result) && result[0] === 'joinChannel') {
      let directory = new Directory(FULL_OP)
      return directory.create(result[1])
    }
  }
}

module.exports = operations