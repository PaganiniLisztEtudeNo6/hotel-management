const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

module.exports = mongoose;
