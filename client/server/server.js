const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//middleware
 app.use(express.json());


//routes
app.use('/api/users', userRoutes);

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log('server running on port ${PORT}'));

