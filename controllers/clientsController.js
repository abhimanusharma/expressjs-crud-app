const Client = require('../models/client');

// Handle fetch all clients on GET request.
exports.fetch_all = function(req, res){
    Client.find(function(err, response){
       res.json(response);
    });
}

// Handle view single client on GET request.
exports.view_single = function(req, res){
    Client.findById(req.params.id, function(err, response){
       res.json(response);
    });
}

// Handle update single client on PUT request.
exports.update_single = function(req, res){
    Client.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating client with id " + req.params.id});
       res.json(response);
    });
}

// Handle delete single client on DELETE request.
exports.delete_single = function(req, res){
    Client.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Client with id " + req.params.id + " removed."});
    });
}

// Handle client create on POST request.
exports.create_post = function(req, res){
    var clientInfo = req.body; //Get the parsed information
    //return res.json({status:'success',message: clientInfo});
    if(!clientInfo.company_name || !clientInfo.client_name || !clientInfo.tel){
       res.json({ status: "error",
          message: "Sorry, you provided worng info"});
    } else {
       var newClient = new Client({
         client_id: clientInfo.client_id,
         client_name: clientInfo.client_name,
         company_name: clientInfo.company_name,
         position: clientInfo.position,
         tel: clientInfo.tel,
         email: clientInfo.email,
         last_contacted_on: clientInfo.last_contacted_on
       });
         
       newClient.save(function(err, clientInfo){
          if(err)
             res.json({message: err, status: "error"});
          else
             res.json({
                message: "New client added",status: "success" , client: clientInfo});
       });
    }
}

