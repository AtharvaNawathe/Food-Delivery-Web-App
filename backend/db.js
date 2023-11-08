const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://TapriCentral:Tapri123@cluster0.b7rxhnc.mongodb.net/Tapri_Central?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected");
    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    global.food_items = data;
  } catch (err) {
    console.error("Error:", err);
  }
};

module.exports = connectToMongoDB;
