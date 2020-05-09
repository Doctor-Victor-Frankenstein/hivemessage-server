const blockchain = require('./helpers/blockchain')
const operations = require('./helpers/operations')
const { globals } = require('./classes/Globals')

blockchain.init({
  logging_level: 3,
  rpc_error_limit: 5,
  rpc_nodes: process.env.RPC_NODES.split(','),
  save_state: globals.save_block,
  load_state: globals.load_block
})
blockchain.stream({ on_op: operations });