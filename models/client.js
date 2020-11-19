const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model client
var clientSchema = new Schema({
  client_id: String,
  client_name: String,
  company_name: String,
  position: String,
  tel: Number,
  email: String,
  last_contacted_on: Date,

});

//create model for client
var client = mongoose.model("client", clientSchema)

module.exports = client;