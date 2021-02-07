const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    id : String,
    name : String,
    category : String,
	city : String,
	price : String,
	rating : String
},
{
    collection : 'places'
})

module.exports = mongoose.model('places', placeSchema);