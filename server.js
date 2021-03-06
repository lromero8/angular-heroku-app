const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var Student = require('./models/Student');
// var CONTACTS_COLLECTION = "contacts";


const app = express();

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-angular-starter`);
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});


/* ------------------- POST STUDENT -------------------- */


app.post("/api/student", (req, res) => {

    var myData = new Student(req.body);
    myData.save()
        .then(item => {
            res.send("Student saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

})

/* ------------------- GET STUDENT -------------------- */

app.get("/api/student", async (request, response) => {

    try {
        var result = await Student.find().exec();
        response.send(result);
        // response.status(200).json(result);
        // console.log(result)
        // response.send("It works");
    } catch (error) {
        response.status(500).send(error);
    }

});