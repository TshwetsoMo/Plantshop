const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Create a new plant
router.post('/', async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get plant by ID
router.get('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        res.json(plant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read all plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a plant
router.put('/:id', async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPlant);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a plant
router.delete('/:id', async (req, res) => {
    try {
        await Plant.findByIdAndDelete(req.params.id);
        res.status(200).json('Plant deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
