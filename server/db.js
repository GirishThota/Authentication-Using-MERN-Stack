const mongoose = require('mongoose')

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully")
    }
    catch(e){
        console.log(error);
        console.log("could nor connect to database")
    }
}