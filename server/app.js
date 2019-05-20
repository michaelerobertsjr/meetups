const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.static('public'));

app.get('/events', (req, res) => {
    axios.get('https://api.meetup.com/sandiegojs/events')
        .then( (response) => res.send(response.data))
        .catch(err => console.log(err))
});


// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;


// curl "https://api.meetup.com/sandiegojs/events"