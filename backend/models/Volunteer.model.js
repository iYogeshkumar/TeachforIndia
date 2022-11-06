const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    spokenLanguages: { type: String, required: true },
    availability: { type: String, required: true },
});

const VolunteerModel = mongoose.model("volunteer", volunteerSchema);

module.exports = VolunteerModel;