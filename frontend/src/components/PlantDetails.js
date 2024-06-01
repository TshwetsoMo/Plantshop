// PlantDetails.js

import React, { useState, useEffect } from 'react';
import './PlantDetails.css';
import { useParams } from 'react-router-dom';
import { getPlantById } from '../api'; // Assuming you have an API function to fetch plant details by ID

const PlantDetails = () => {
    const { plantId } = useParams(); // Get the plantId from the URL
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        getPlantById(plantId).then(res => {
            setPlant(res.data);
        });
    }, [plantId]);

    if (!plant) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <h1>{plant.name}</h1>
            <p>Description: {plant.description}</p>
            <p>Price: ${plant.price}</p>
            <p>Stock: {plant.stock}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default PlantDetails;
