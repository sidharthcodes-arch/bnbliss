const Joi = require("joi");

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().positive().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().allow("", null),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().positive().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});
module.exports.reviewSchema = reviewSchema;
module.exports.listingSchema = listingSchema;
