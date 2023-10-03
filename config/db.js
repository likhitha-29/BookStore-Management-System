const mongoose = require("mongoose");

// URL-encode the password
const encodedPassword = encodeURIComponent("Likhitha#123");

mongoose.connect(`mongodb+srv://likhitharoyal6:${encodedPassword}@bookstoremanagement.anjhwpz.mongodb.net/BooksManagementSystem`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to the database:', error);
});

db.once('open', function () {
  console.log('Successfully connected to the database');
});
