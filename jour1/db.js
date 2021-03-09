const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/garage",
{useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("DB connected");
});

const carsSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    annee: Number
});

const carModel = mongoose.model("cars", carsSchema);
//C.R.U.D => Create Read Update Delete

//Create

//Delete
carModel.deleteMany({})
.then(() => {
    carModel.create([
        {
        marque: "Renault",
        modele: "Espace",
        annee: 1999
    },
    {
        marque: "Renault",
        modele: "Scenic",
        annee: 2004
    },
    {
        marque: "Peugeot",
        modele: "308",
        annee: 2017
    }
    ]);
});
