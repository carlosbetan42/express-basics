const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const categoryId = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductsSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  description: description.required(),
  price: price.required(),
  categoryId: categoryId.required()
});

const updateProductsSchema = Joi.object({
  name,
  image,
  description,
  price,
  categoryId
});

const getProductsSchema = Joi.object({
  id: id.required()
});

const queryProductsSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().integer(),
    then: Joi.required()
  })
});

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema, queryProductsSchema }
