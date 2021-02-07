// Import express
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const placeRoutes = require('./routes/places');


const  cors = require('cors');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

// db url, collection name and db name
const dburl = 'mongodb+srv://hackbu:hacker@hackbu.zzqys.mongodb.net/valentine';

app.use('/places',placeRoutes);


mongoose.connect( dburl,
  { useNewUrlParser: true },
  () => {
  console.log('connected to db:'+dburl);
  });

app.get('/', (req,res)=>{
  res.send('Cheap Valentine data');
})

// listen on port 3000
app.listen(8000, function() {
  console.log('backend app listening on port 8000!')
});