import React, { useState } from 'react';
import { createPlant } from '../api';
import './PlantForm.css'

const PlantForm = ({ onClose }) => {
    const [form, setForm] = useState({ name: '', description: '', price: '', stock: '' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await createPlant(form);
        setForm({ name: '', description: '', price: '', stock: '' });
        onClose(); // Close the form after submission
    };

    return (
        <div className="plant-form-container">
            <form onSubmit={handleSubmit} className="plant-form">
                <h2>Add Plant</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                    />
                </label>
                <label>
                    Stock:
                    <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PlantForm;

