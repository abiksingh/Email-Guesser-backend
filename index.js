const express = require('express');
const connectDB = require('./config/db')



const app = express();


//Connect Database

connectDB();

// Init bodyparser middleware

app.use(express.json({extended: false}));



// Define Routes

app.use('/api/email', require('./controllers/emailController'));


const PORT = process.env.PORT || 1000;


app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})