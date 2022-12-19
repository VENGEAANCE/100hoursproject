const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 2121;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false })) // We ahould now be able to accept body data, which comes in req.body

// connect openAi routes file
app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server running on ${port}`));

