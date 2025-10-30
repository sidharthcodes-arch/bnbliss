const Listing = require("../models/listing.js");
const axios = require("axios");

module.exports.search = async (req, res, next) => {
  searchItem = req.query;

  const listing = await Listing.findOne(searchItem)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing Doesn't exist");
    return res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
};
module.exports.index = async (req, res, next) => {
  const allListings = await Listing.find({});
  return res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewPage = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing Doesn't exist");
    return res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
};

module.exports.addNewListing = async (req, res, next) => {
  let newListing = new Listing(req.body.listing);
  let location = newListing.location;
  const geoRes = await axios.get(
    `https://us1.locationiq.com/v1/search.php`,
    {
      params: {
        key: process.env.LOCATIONIQ_KEY,
        q: location,
        format: "json",
      },
    },
    { timeout: 10000 }
  );
  const coords = geoRes.data[0];
  newListing.geometry = {
    type: "Point",
    coordinates: [coords.lon, coords.lat],
  };
  newListing.owner = req.user._id;
  newListing.image.url = req.file.path;
  newListing.image.filename = req.file.filename;
  await newListing.save();
  req.flash("success", "New Listing Added");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing Doesn't Exist");
    return res.redirect("/listings");
  }
  let originalUrl = listing.image.url;
  replacedUrl = originalUrl.replace("/upload/", "/upload/w_250/");
  res.render("listings/edit.ejs", { listing, replacedUrl });
};

module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );
  let location = listing.location;
  const geoRes = await axios.get(
    `https://us1.locationiq.com/v1/search.php`,
    {
      params: {
        key: process.env.LOCATIONIQ_KEY,
        q: location,
        format: "json",
      },
    },
    { timeout: 10000 }
  );
  const coords = geoRes.data[0];
  listing.geometry = {
    type: "Point",
    coordinates: [coords.lon, coords.lat],
  };
  await listing.save();
  if (typeof req.file !== "undefined") {
    listing.image.url = req.file.path;
    listing.image.filename = req.file.filename;
    await listing.save();
  }

  req.flash("success", "Listing Has Been Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res, next) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
