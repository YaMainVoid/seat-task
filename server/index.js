const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const ComponentsManipulator = require('./utils/ComponentsManipulator');
let data = [];

app.listen(process.env.PORT, () => {
    console.log(`Server is running now. PORT is ${process.env.PORT}`)
})

app.use(cors());
app.use(express.json());

app.post('/api/admin/constructor/components_data', (req, res) => {
    console.log('POST:/api/admin/constructor/components_data');
    data = req.body;
    res.send({
        error: ''
    })
})

app.get('/api/components_data', (req, res) => {
    console.log('GET:/api/components_data');
    res.send(data);
})
app.post('/api/order', (req, res) => {
    console.log('POST:/api/order');
    ComponentsManipulator.setTmpStates(data, req.body);
})