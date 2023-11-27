const Joi = require("joi");

const schemaAddContact = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": `"name" must be exist`,
    "string.empty": `"name" cannot be an empty field`,
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "co", "org", "uk", "ua", "ca"] },
    })
    .required()
    .messages({
      "any.required": `"email" must be exist`,
      "string.email": `string must be email address`,
    }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `"phone" must be exist` }),
  favorite: Joi.boolean(),
});

const schemaUpdateContact = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    "any.required": `"name" must be exist`,
    "string.empty": `"name" cannot be an empty field`,
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "co", "org", "uk", "ua", "ca"] },
    })
    .messages({
      "any.required": `"email" must be exist`,
      "string.email": `string must be email address`,
    }),
  phone: Joi.string().messages({ "any.required": `"phone" must be exist` }),
  favorite: Joi.boolean(),
});

const schemaFavoriteContact = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  schemaAddContact,
  schemaUpdateContact,
  schemaFavoriteContact,
};
