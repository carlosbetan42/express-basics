const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const categoryId = Joi.number().integer();

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

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema }
