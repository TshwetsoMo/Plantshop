const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    // image:{ type: Image, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

module.exports = mongoose.model('Plant', PlantSchema);