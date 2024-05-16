const express = require('express')
const app = express()
var request = require('request');
const cors = require('cors');


app.use(express.json());
app.use(cors());



// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var choice = 'AAPL';
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + choice + '&interval=5min&apikey=THMC1AF24O40VSDX';
// THMC1AF24O40VSDX
console.log("AAAA")

app.post("/submit", (req, res) => {
    console.log()
    const { ticker } = req.body;

    console.log('Received ticker:', ticker);
    res.send('Message received successfully');
    
  
});


app.get("/a", (req, res) => {


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
            console.log(data)
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




