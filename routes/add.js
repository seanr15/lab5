var data = require("../data.json");

exports.addFriend = function(req, res) {  

  data["friends"].push({name:req.query.name, description:req.query.description, imageURL:"http://lorempixel.com/500/500/people"});
  res.render('add', data);

 }
