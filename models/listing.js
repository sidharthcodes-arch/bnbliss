const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const User = require("./user");
const { string } = require("joi");

const listingSchema = new Schema({
  title: String,
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"], // GeoJSON requires 'Point' for lat/lon
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
      default: [0, 0],
    },
  },
  category: {
    type: String,
    enum: [
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "AmazingPools",
      "Camping",
      "Farms",
      "Arctic",
      "Domes",
      "Boats",
    ],
    required: true,
  },
});

listingSchema.post("findOneAndDelete", async (data) => {
  await Review.deleteMany({ _id: { $in: data.reviews } });
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
