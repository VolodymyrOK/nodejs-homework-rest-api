const express = require("express");

const controllers = require("../../controllers");
const { validateBody } = require("../../decorators");
const {
  schemaAddContact,
  schemaUpdateContact,
  schemaFavoriteContact,
} = require("../../schemes");
const {
  isEmptyBody,
  isValidId,
  isEmptyBodyUpdate,
  isEmptyFavoriteUpdate,
} = require("../../middlewares");

const router = express.Router();

router.get("/", controllers.getListContacts);

router.get("/:contactId", isValidId, controllers.getContactById);

router.post(
  "/",
  isEmptyBody,
  validateBody(schemaAddContact),
  controllers.addContact
);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBodyUpdate,
  validateBody(schemaUpdateContact),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyFavoriteUpdate,
  validateBody(schemaFavoriteContact),
  controllers.updateContact
);

router.delete("/:contactId", isValidId, controllers.removeContact);

module.exports = router;
