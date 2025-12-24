const Joi = require("joi");

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details.map((d) => d.message).join(", "),
      });
    }
    req.validatedBody = value;
    next();
  };
};

module.exports = { validate };
