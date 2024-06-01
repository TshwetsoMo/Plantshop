import React from 'react';
import { deletePlant } from '../api';
import './PlantItem.css';
import { Link } from 'react-router-dom';

const PlantItem = ({ plant, onEdit }) => {
    const handleDelete = async () => {
        await deletePlant(plant._id);
    };

    const handleEditClick = () => {
        onEdit(plant);
    };

    return (
        <div className="plant-card">
            <Link to={`/plants/${plant._id}`}>
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">Price: ${plant.price}</p>
                    <p className="plant-stock">Stock: {plant.stock}</p>
                </div>
            </Link>
                <button onClick={handleEditClick} className="edit-button">Edit</button>
                <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
    );
};

export default PlantItem;
