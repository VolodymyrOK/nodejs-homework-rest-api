const express = require("express");

const contactController = require("../../controllers/contact-controllers");
const { validateBody } = require("../../decorators");
const {
  schemaAddContact,
  schemaUpdateContact,
  schemaFavoriteContact,
} = require("../../schemes/contact-schemes");
const {
  isEmptyBody,
  isEmptyBodyUpdate,
  isEmptyFavoriteUpdate,
  authenticate,
  isValidId,
} = require("../../middlewares");

const contactRouter = express.Router();
contactRouter.use(authenticate);

contactRouter.get("/", contactController.getListContacts);
contactRouter.get("/:contactId", isValidId, contactController.getContactById);
contactRouter.post(
  "/",
  isEmptyBody,
  validateBody(schemaAddContact),
  contactController.addContact
);
contactRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBodyUpdate,
  validateBody(schemaUpdateContact),
  contactController.updateContact
);
contactRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyFavoriteUpdate,
  validateBody(schemaFavoriteContact),
  contactController.updateContact
);
contactRouter.delete("/:contactId", isValidId, contactController.removeContact);

module.exports = contactRouter;
