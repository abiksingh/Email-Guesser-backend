const mongoose = require('mongoose');


const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/email", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false

        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        //Exit process with failiure
        process.exit(1);  
    }
}


module.exports = connectDB;