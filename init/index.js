const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

let mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68ea1a269ac90f1c1466dbcf",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialised");
};

initDB();
