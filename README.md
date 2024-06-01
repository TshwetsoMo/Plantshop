# Plant Shop Application

This is a MERN (MongoDB, Express, React, Node.js) stack application for managing a plant shop. The application allows users to view a list of plants, view details of individual plants, and perform CRUD (Create, Read, Update, Delete) operations.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Make sure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (v4 or higher)

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/plant-shop.git
cd plant-shop

Backend Setup
Navigate to the backend directory:
bash
Copy code
cd backend
Install backend dependencies:
bash
Copy code
npm install
Create a .env file in the backend directory and add the following environment variables:
env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5001
Start the backend server:
bash
Copy code
npm start
The backend server should now be running on http://localhost:5001.

Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd frontend
Install frontend dependencies:
bash
Copy code
npm install
Start the frontend development server:
bash
Copy code
npm start
The frontend application should now be running on http://localhost:3000.

Running the Application
To run the application, make sure both the backend and frontend servers are running:

Backend: http://localhost:5001
Frontend: http://localhost:3000
You can now open your browser and navigate to http://localhost:3000 to see the application in action.

API Endpoints
Plants
GET /api/plants - Get all plants
GET /api/plants/:id - Get a single plant by ID
POST /api/plants - Create a new plant
PUT /api/plants/:id - Update a plant by ID
DELETE /api/plants/:id - Delete a plant by ID
File Structure
java
Copy code
plant-shop/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│   ├── public/
│   ├── package.json
└── README.md
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
