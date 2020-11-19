const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model sales
var salesSchema = new Schema({
    employee_id: String,
    employee_name: String,
    lead_pipeline: {
        open_leads:Number,
        contacted_leads: Number,
        qualified_leads: Number,
        closed_lead: Number
    }

});

//create model for client
var sales = mongoose.model("sales", salesSchema)

module.exports = sales;