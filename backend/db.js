const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://quickbite:Anni5995@cluster0.maigxjd.mongodb.net/quickbitemern?retryWrites=true&w=majority";
const mongoURI =
  "mongodb://quickbite:Anni5995@ac-wqau4pr-shard-00-00.maigxjd.mongodb.net:27017,ac-wqau4pr-shard-00-01.maigxjd.mongodb.net:27017,ac-wqau4pr-shard-00-02.maigxjd.mongodb.net:27017/quickbitemern?ssl=true&replicaSet=atlas-9b6po6-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected!");
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    const foodCategory = mongoose.connection.db.collection("food_categories");

    foodCategory.find({}).toArray(function (err, catData) {
      global.food_items = data;
      global.foodCategory = catData;
    });
    // console.log(global.food_items);
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = mongoDB;
