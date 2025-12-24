const Joi = require("joi");

const schemas = {
  signup: Joi.object({
    name: Joi.string().required().min(2).max(100).messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 2 characters",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "Please provide a valid email",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters",
    }),
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  medicine: Joi.object({
    brandName: Joi.string().required(),
    genericName: Joi.string().required(),
    strength: Joi.string(),
    category: Joi.string(),
    composition: Joi.string(),
    manufacturer: Joi.string(),
    price: Joi.number().positive(),
    country: Joi.string().length(2),
    approvedBy: Joi.string(),
  }),

  saveSearch: Joi.object({
    query: Joi.string().required(),
    medicineId: Joi.number().integer(),
  }),

  saveAlternative: Joi.object({
    brandMedicineId: Joi.number().required(),
    alternativeId: Joi.number().required(),
    savings: Joi.number(),
  }),
};

module.exports = schemas;
