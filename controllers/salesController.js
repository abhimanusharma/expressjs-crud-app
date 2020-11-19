const Sale = require('../models/sale');

// Handle fetch all sales on GET request.
exports.fetch_all = function(req, res){
    Sale.find(function(err, response){
       res.json(response);
    });
}

// Handle view single sale on GET request.
exports.view_single = function(req, res){
    Sale.findById(req.params.id, function(err, response){
       res.json(response);
    });
}

// Handle update single sale on PUT request.
exports.update_single = function(req, res){
    Sale.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating sale with id " + req.params.id});
       res.json(response);
    });
}

// Handle delete single sale on DELETE request.
exports.delete_single = function(req, res){
    Sale.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Sale with id " + req.params.id + " removed."});
    });
}

// Handle client create on POST request.
exports.create_post = function(req, res){
    var saleInfo = req.body; //Get the parsed information
    
    if(!saleInfo.lead_pipeline || !saleInfo.employee_name){
        res.json({ status: "error",
           message: "Sorry, you provided worng info"});
     } else {
        var newSale = new Sale({
             employee_id: saleInfo.employee_id,
    	     employee_name: SaleInfo.employee_name,
    	     lead_pipeline: {
                 open_leads: SaleInfo.open_leads,
                 contacted_leads: SaleInfo.contacted_leads,
                 qualified_leads: SaleInfo.qualifies_leads,
                 closed_lead: SaleInfo.closed_lead
    	     }
        });
         
        newSale.save(function(err, saleInfo){
        if(err)
            res.json({message: "Database error", status: "error"});
        else
            res.json({
                 message: "New sale added",status: "success" , sale: saleInfo
	    });
        });
    }
}

