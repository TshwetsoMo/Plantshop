import React, { useState } from 'react';
import { updatePlant } from '../api';
import './EditPlantForm.css'; // Assuming you will have a CSS file for styling

const EditPlantForm = ({ plant, onSave, onCancel }) => {
    const [name, setName] = useState(plant.name);
    const [description, setDescription] = useState(plant.description);
    const [price, setPrice] = useState(plant.price);
    const [stock, setStock] = useState(plant.stock);
    const [image, setImage] = useState(plant.image);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPlant = { ...plant, name, description, price, stock, image };
        await updatePlant(updatedPlant._id, updatedPlant);
        onSave(updatedPlant);
    };

    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit} className="edit-form">
                <h2>Edit Plant</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    Stock:
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </label>
                <div className="form-buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditPlantForm;
