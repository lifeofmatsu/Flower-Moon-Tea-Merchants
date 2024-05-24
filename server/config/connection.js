const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mirasleaf', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

module.exports = mongoose.connection;