const { default: mongoose } = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: String,
    unit: String,
    price: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;