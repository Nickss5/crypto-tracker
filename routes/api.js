const express = require('express');
const router = express.Router();
const axios = require('axios');
const Crypto = require('../models/Crypto');

// Route to fetch data from WazirX and store in MongoDB

router.get('/fetchData', async (req,res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers')
        const tickers = response.data;


        const top10 = Object.values(tickers).slice(0,10).map(ticker => ({
            name: ticker.name,
            last: ticker.last,
            buy: ticker.buy,
            sell: ticker.sell,
            volume: ticker.volume,
            base_unit: ticker.base_unit,
        }));

        await Crypto.deleteMany({});
        await Crypto.insertMany(top10);

        res.status(200).json({
            message: 'Data fetched and stored successfully!'
        });
    } 
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch data'});
    }
});


// Route to get the top 10 cryptocurrencies from MongoDB

router.get('/getTop10', async (req,res) => {
    try {
        const cryptos = await Crypto.find().limit(10);
        res.json(cryptos);
    }
    catch(error) {
        res.status(500).json({ error: 'Error fetching data'});
    }
});

module.exports = router; 

