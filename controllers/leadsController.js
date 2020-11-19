const Lead = require('../models/lead');

// Handle fetch all leads on GET request.
exports.fetch_all = function(req, res){
    Lead.find(function(err, response){
    	res.json(response);
    });
}

// Handle view single lead on GET request.
exports.view_single = function(req, res){
    Lead.findById(req.params.id, function(err, response){
		res.json(response);
    });
}

// Handle update single client on PUT request.
exports.update_single = function(req, res){
    Lead.findByIdAndUpdate(req.params.id, req.body, function(err, response){
		if(err) res.json({message: "Error in updating lead with id " + req.params.id});
		res.json(response);
    });
}

// Handle delete single lead on DELETE request.
exports.delete_single = function(req, res){
    client.findByIdAndRemove(req.params.id, function(err, response){
		if(err) res.json({message: "Error in deleting record id " + req.params.id});
		else res.json({message: "Lead with id " + req.params.id + " removed."});
    });
}

// Handle lead create on POST request.
exports.create_post = function(req, res){
    var leadInfo = req.body; //Get the parsed information
    
    if(!leadInfo.company || !leadInfo.client_name || !leadInfo.tel_no){
		res.json({ status: "error",
			message: "Sorry, you provided worng info"});
    } else {
		var comments = [];
		if(leadInfo.comments) {
			for(i=0; i<leadInfo.comments.length; i++) {
				comments.push({ body: leadInfo.comments[i].body, date: leadInfo.comments[i].date });
			}
		}
		var newLead = new Lead({
			id: leadInfo.id,
			created_on: leadInfo.created_on,
    		source: leadInfo.source,
    		assigned_to: leadInfo.assigned_to,
    		client_name: leadInfo.client_name,
    		email: leadInfo.email,
    		tel_no: leadInfo.tel_no,
    		position: leadInfo.position,
    		company: leadInfo.company,
    		domain: leadInfo.domain,
    		status: leadInfo.status,
    		confidence: leadInfo.confidence,
    		comments: comments,
    		connected_times: leadInfo.connected_times,
    		is_delete: leadInfo.is_delete
		});
         
		newLead.save(function(err, leadInfo){
			if(err)
				res.json({message: "Database error", status: "error"});
			else
            	res.json({
                	message: "New client added",status: "success" , lead: leadInfo});
			});
		}
}

