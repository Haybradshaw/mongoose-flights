var Flight = require('../models/ticket');

//----consider change var name--
function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.tickets.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
        console.log(flight);
    });
}
module.exports = {
    create
};