const express  = require("express");
const app = express()
const bodyParser = require("body-parser");
const axios = require("axios");
var cors = require('cors')
app.use(cors());

//admin admin
const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:admin@cluster0.9x3zu.mongodb.net/sample_mflix?retryWrites=true&w=majority"
var User;

app.use('/app', express.static(__dirname + '/ui/dist'));


async function connectMongoose() {
	await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true }).then(() =>{
		console.log("mongoose connected..")
	})
	require("./User")
	User = mongoose.model("User")
}
async function initialLoad() {
	await connectMongoose();
}

app.get("/users",async (req, res) => {
	User.find().then((users) => {
		// res.send(users);
		res.json(users);
	}).catch((err) => {
		if(err) {
			console.log(err);
			throw err
		}
	})
})

// Create new user
initialLoad()

app.listen(3002, () => {
    console.log('Server started on port 3002');
});