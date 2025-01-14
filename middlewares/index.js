const {
  isEmptyBody,
  isEmptyBodyUpdate,
  isEmptyFavoriteUpdate,
  isEmptyBodyAuth,
  isEmptySubscriptionUpdate,
} = require("./isEmptyBody");
const { isValidId, isValidUserId } = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  isEmptyBody,
  isEmptyBodyUpdate,
  isEmptyFavoriteUpdate,
  isEmptyBodyAuth,
  isValidId,
  isValidUserId,
  authenticate,
  isEmptySubscriptionUpdate,
  upload,
};
