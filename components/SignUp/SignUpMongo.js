const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hari:hari@srp.b8rbbv3.mongodb.net/?retryWrites=true&w=majority&appName=srp")
.then(() => {
    console.log("Coneection Successful");
})

.catch(() => {
    console.log("error");
})

const MonSignUp = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    }
})

const collection = new mongoose.model("Test", MonSignUp)
