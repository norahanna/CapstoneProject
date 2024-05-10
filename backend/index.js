const express = require('express'); //importing the express package
const Destination = require('./models/destination');
const app = express(); //create a web application


app.use(express.json());

//home route
app.get('/', function(req, res){
    res.send('Hello World');
});

//Get all destinations
app.get('/destinations', function(req, res){
    Destination.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

//Create a new destination
app.post('/destinations', function(req, res){
    Destination.create(req.body).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Update student
app.patch('/destinations/:destination_id', function(req, res){
    const destinationId = parseInt(req.params.destination_id);
 
    //Find the student in the database
    Destination.findByPk(destinationId).then((result) => {
        if(result){
            //Update the student record
            Object.assign(result, req.body);
 
            result.save().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });
        } else {
            res.status(404).send('Destination not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Delete destination
app.delete('/destinations/:destination_id', function(req, res){
    const destinationId = parseInt(req.params.destination_id);
 
    //Find the destination in the database
    Destination.findByPk(destinationId).then((result) => {
        if(result){
            //Delete a destination record
            result.destroy().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });
        } else {
            res.status(404).send('Destination not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Get all destinations
app.get('/destinations', function(req, res){
 
    let data = {where: {}};
 
    //CostofLiving filter
    if(req.query.CostofLiving){
        data.where.CostofLiving = req.query.CostofLiving;
    }
 
    //QualityOfLifeRating filter
    if(req.query.QualityOfLifeRating){
        data.where.QualityOfLifeRating = req.query.QualityOfLifeRating;
    }
 
    Destination.findAll(data).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

//web server
app.listen(3000, function(){
    console.log('Server is running on port 3000...');
});