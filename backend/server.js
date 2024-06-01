const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Establish database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Plant Routes
const plantRoutes = require('./routes/plants'); // Path to plant routes
app.use('/api/plants', plantRoutes);

// User Routes
const userRoutes = require('./routes/userRoutes'); // Correct path to userRoutes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const express = require( 'express');
// const mongoose = require( 'mongoose');
// const dotenv = require( 'dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express. json());

// app-get('/', (req, res) => {
//     res.send( 'Hello World' );
// });

// app. listen(PORT, () => {
//     console. log (`Server is running on port $(PORT)`);
// });

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Mongo DB connected'))
// .catch(err => console.log(err));


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

// const plantRoutes = require('./routes/plants');
// app.use('/api/plants', plantRoutes);

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));

