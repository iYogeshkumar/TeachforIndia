const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const Volunteer = require("./models/Volunteer.model")
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("home page");
});

app.post("/", async (req, res) => {

  const {name, email, phone, location, spokenLanguages, availability} = req.body;
  
  if(!name || !email || !phone || !location || ! spokenLanguages || !availability){
    return res.status(422).json({error: "please fill the field properly"});
  }
  try {
    const userExist = await Volunteer.findOne({email: email});
    if(userExist) {
      return res.status(422).json({error: "Email already exists"});
    }
    const user = new Volunteer({name, email, phone, location, spokenLanguages, availability});
    await user.save();
    res.status(201).json({message: "volunteer registration successfully"});
  } catch (err) {
    console.log(err);
  }
  
})

// app.get("/listofcandidates",async(req, res)=>{
//   const data = await Volunteer.find({})
//   console.log(data)
//   res.send(data)

// })

app.get("/listofcandidates", async function (req, res) {
  try {
    const data= await Volunteer.find().lean().exec();
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("Connnected to db successfully");
    } catch (err) {
      console.log("Error connecting to db");
      console.log(err);
    }
    console.log(`listening on port ${process.env.PORT}`);
  });