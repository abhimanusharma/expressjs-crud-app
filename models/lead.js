const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model leads
var leadSchema = new Schema({
    lead_id: Number,
    created_on: Date,
    Source: String,
    assigned_to: String,
    client_name: String,
    email: String,
    tel_no: Number,
    position: String,
    company: String,
    domain: String,
    status: Boolean,
    Confidence: Number,
    comments: [{ body: String, date: Date }],
    connected_times: Number,
    isdelete: Boolean
});

//create model for leads
var lead = mongoose.model("lead", leadSchema)

module.exports = lead;
