const Service = require("../models/service");

// Get all services
function getAllServices(req, res) {
    Service.find()
    .then((services) => {
        res.status(200).json(services);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
    }

// Get service information by ID
function getServiceById(req, res) {
    Service.findById(req.params.id)
    .then((service) => {
        if (!service) {
        return res.status(404).json({ message: 'Service not found.' });
        }
        res.status(200).json(service);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Create a new service
function createService(req, res) {
    const newService = new Service(req.body);
    newService.save()
    .then((savedService) => {
        res.status(201).json(savedService);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Update a service
function updateService(req, res) {
    Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((service) => {
        if (!service) {
            return res.status(404).json({ message: 'Service not found.' });
        }
            res.status(200).json(service);
    })
    .catch((error) => {
        res.status(500).json({ message: 'Server error. Please try again.' });
    });
}

// Delete a service
function deleteService(req, res) {
    Service.findByIdAndDelete(req.params.id)
        .then((service) => {
            if (!service) {
                return res.status(404).json({ message: 'Service not found.' });
            }
            res.status(204).json();
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server error. Please try again.' });
        });
}

module.exports = {
    getAllServices,
    getServiceById,
    createService,
    updateService,
};