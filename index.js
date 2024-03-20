const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT =  5001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// MongoDB connection
mongoose.connect('mongodb+srv://admin:anamika_1234@cluster0.lvywqj9.mongodb.net/batcave_prelaunch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Data model

const userSchema = new mongoose.Schema({
  user_id: { type: String, unique: true },
  full_name: String,
  email: String,
  number: Number,
  dob: String,
  city: String,
  address: String,
  couponCode:String
});
const User = mongoose.model('userDetails', userSchema);

// Count
app.get('/api/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
