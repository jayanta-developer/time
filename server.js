const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')
const app = express();
const PORT = 3005

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const HomeRoute = require('./Routes/homeRout');



app.use(HomeRoute)

app.listen(PORT,()=>{
  console.log(`app is running on port ${PORT}...`)
})