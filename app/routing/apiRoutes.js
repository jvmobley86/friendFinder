var friends = require("../data/friends.js");
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var match = {
            name: "",
            photo:"",
            difference: 1000
        };
        console.log(req.body);
        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores);
        

        for (var i = 0; i <friends.length; i++){
            console.log (friends [i]);
           var totalDifference=0;
            for (var x =0; x<friends[i].scores; x++){
                totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
                console.log(totalDifference);
                
            }
                if (totalDifference<= match.difference){
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDifference;
                }
        }
        friends.push(userData);
        res.json(match); 
       
    });
}