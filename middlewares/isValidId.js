const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(HttpError(400, `${contactId} is not valid id`));
  }
  next();
};
const isValidUserId = (req, res, next) => {
  const { userId } = req.params;
  if (!isValidObjectId(userId)) {
    return next(HttpError(400, `${userId} is not valid id`));
  }
  next();
};

module.exports = {
  isValidId,
  isValidUserId,
};
