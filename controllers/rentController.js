const Rent = require("../models/rent");

// Get all rents
function getAllRents(req, res) {
    Rent.find()
    .then((rents) => {
        res.status(200).json(rents);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Get rent information by ID
function getRentById(req, res) {
    Rent.findById(req.params.id)
    .then((rent) => {
        if (!rent) {
            return res.status(404).json({ message: 'Rent not found.' });
        }
        res.status(200).json(room);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Create a new rent
function createRent(req, res) {
    const newRent = new Rent(req.body);
    newRent.save()
    .then((savedRent) => {
        res.status(201).json(savedRent);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Update a rent
function updateRent(req, res) {
    Rent.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((rent) => {
        if (!rent) {
            return res.status(404).json({ message: 'Rent not found.' });
        }
        res.status(200).json(rent);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Delete a rent
function deleteRent(req, res) {
    Rent.findByIdAndDelete(req.params.id)
        .then((rent) => {
            if (!rent) {
                return res.status(404).json({ message: 'Rent not found.' });
            }
            res.status(204).json();
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server error. Please try again.' });
        });
}

module.exports = {
    getAllRents,
    getRentById,
    createRent,
    updateRent,
};