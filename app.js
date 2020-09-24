var express = require('express');
var app = express();
var hotel = require("./hotel.json");
app.get("/details", function(req, res)
{
    var  nameList = [];
    hotel.forEach(element =>
    {
        nameList.push(element.name)  
    });
    res.send(nameList);
})
app.get("/city", function(req, res)
{
    keyword = req.query.sCity;
    var searchCity = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            searchCity.push(element.name); 
        }
    });
    res.send(searchCity);
})
app.get("/type", function(req, res)
{
    keyword = req.query.sType;
    var searchType = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.name); 
        }
    });
    res.send(searchType);
})


app.get("/cuisine", function(req, res)
{
    keyword = req.query.sCuisine;
    var searchCuisine = [];
    hotel.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(keyword == element.cuisine[key])
            {
                searchCuisine.push(element.name);
            }
        }
    });
    res.send(searchCuisine);
})
app.listen(3000, function()
{
    console.log("Server listening to port 3000");
})