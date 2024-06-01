import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlants } from '../api';
import PlantItem from './PlantItem';
import PlantForm from './PlantForm'; // Import the PlantForm component
import EditPlantForm from './EditPlantForm';
import './PlantList.css';

const PlantList = () => {
    const [plants, setPlants] = useState([]);
    const [editingPlant, setEditingPlant] = useState(null);
    const [showPlantForm, setShowPlantForm] = useState(false); // State to manage the visibility of the PlantForm
    const [reloadPlants, setReloadPlants] = useState(false); // State to trigger reload of plants

    useEffect(() => {
        getPlants().then(res => setPlants(res.data));
    }, [reloadPlants]); // Reload plants whenever reloadPlants changes

    const handleEdit = (plant) => {
        setEditingPlant(plant);
    };

    const handleSave = (updatedPlant) => {
        setPlants(plants.map(plant => (plant._id === updatedPlant._id ? updatedPlant : plant)));
        setEditingPlant(null);
    };

    const handleCancel = () => {
        setEditingPlant(null);
    };

    const handleAddPlant = () => {
        setShowPlantForm(true);
    };

    const handleClosePlantForm = () => {
        setShowPlantForm(false);
    };

    const handlePlantAdded = () => {
        setReloadPlants(!reloadPlants); // Toggle reloadPlants to trigger reload
        setShowPlantForm(false); // Close the PlantForm
    };

    return (
        <div className='background'>
            <div className='plantlist'>
                <h1>Available Plants:</h1>
                <div className="plant-items">
                    {plants.map(plant => (
                        <PlantItem key={plant._id} plant={plant} onEdit={handleEdit} />
                    ))}
                </div>
                <button className='add-plant-button' onClick={handleAddPlant}>
                    Add Plants
                </button>
            </div>
            {editingPlant && (
                <EditPlantForm
                    plant={editingPlant}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
            {showPlantForm && (
                <PlantForm
                    plant={null}
                    setPlant={handlePlantAdded} // Pass handlePlantAdded as setPlant
                    onClose={handleClosePlantForm}
                />
            )}
        </div>
    );
};

export default PlantList;

