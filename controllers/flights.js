var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {
            title: 'Flight Detail', flight
        });
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    console.log('this is our req.body : ', JSON.stringify(req.body))
    var flight = new Flight(req.body);
   console.log(req.body.airport)
    flight.save(function(err) {
      //one way to handle erros in express
      if (err) return res.redirect('flights/new');
      console.log(flight);
      console.log(err)
    })
    res.redirect('/flights');
  }
