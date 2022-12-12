const mongoose = require('mongoose')
const uri = "mongodb+srv://silas_m:7h3G10ry@whatsapp.urifnna.mongodb.net/whatsapp?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Connection error"));

db.on('open', () => {
    console.log("DB Connection successful...")
})

module.exports = { db };
