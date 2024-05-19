const express = require('express')
const app = express()
var request = require('request');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');




app.use(express.json());
app.use(cors());

const url = "https://api.sportmonks.com/v3/my/leagues?api_token=f93ggkCdVGTfSMMPHbDHQZ0qqOVS1Bpjs1kuUoPUIX0LZUb2NjgF6unrlBx0&include="


//f93ggkCdVGTfSMMPHbDHQZ0qqOVS1Bpjs1kuUoPUIX0LZUb2NjgF6unrlBx0

const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

app.get("/data", (req, res) => {


    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, response, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (response.statusCode !== 200) {
            console.log('Status:', response.statusCode);
        } else {
            console.log(data)
            res.json(data)
        }
    });
    
});


app.listen(5000, () => { console.log("Sever started on port 5000") })


/*
const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(5000, () => { console.log("Sever started on port 5000") })


/==================================================================================================
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var choice = 'AAPL';
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + choice + '&interval=5min&apikey=THMC1AF24O40VSDX';
// THMC1AF24O40VSDX

app.get("/", (req, res) => {
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
        if (err) {
        console.log('Error:', err);
        } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
        } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
        }
    });
});
*/




