var BreweryDb= require("brewerydb-node");
var brewdb = new BreweryDb('6a9295f5652fd5ef1ed7bf0fd6bae84b');

brewdb.search.beers({ q:"Racer 5" }, function(err, data){
    console.log(data[0]);
})