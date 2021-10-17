const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();
conectarDB();

app.use(cors());

//enable read in json format
app.use(express.json({ extended: true }));

//ruting
app.use('/api/products', require('./routes/product'));

const port = process.env.PORT || 7008
app.listen(port, '0.0.0.0', () => console.log(`Server running on port: ${port}`))
