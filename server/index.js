const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(4000, () => {console.log("You're up and running on 4000")});

let hobbies = ["Rock climbing", "Longboarding", "Video games", "Tennis"];
let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get('/api/users', (req,res) => {
    res.status(200).send(friends);
});

app.get('/weather/:temperature', (req,res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

app.get('/api/hobbies', (req,res) => {
    res.status(200).send(hobbies);
});
