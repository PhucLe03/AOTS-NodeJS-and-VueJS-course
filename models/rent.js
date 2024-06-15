const { default: mongoose } = require("mongoose");

const rentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    identification_card: String,
    birth_day: Date,
    sex: Boolean,
    province: String,
    district: String,
    commune: String,
    address: String,
    room: [{
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
        },
        quantity: Number,
    }],
    main_contact: Boolean,
    status: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;