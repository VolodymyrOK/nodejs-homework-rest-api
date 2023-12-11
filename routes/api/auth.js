const express = require("express");
const authController = require("../../controllers/auth-controllers");

const {
  authenticate,
  isEmptyBodyAuth,
  isEmptySubscriptionUpdate,
  isValidUserId,
  upload,
} = require("../../middlewares");
const { validateBody } = require("../../decorators");
const {
  userRegisterSchema,
  userLoginSchema,
  userSubscriptionSchema,
  userEmailSchema,
} = require("../../schemes/user-schemes");

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBodyAuth,
  validateBody(userRegisterSchema),
  authController.register
);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
  "/verify",
  isEmptyBodyAuth,
  validateBody(userEmailSchema),
  authController.resendVerify
);

authRouter.post(
  "/login",
  isEmptyBodyAuth,
  validateBody(userLoginSchema),
  authController.login
);

authRouter.patch(
  "/:userId/subscription",
  isValidUserId,
  isEmptySubscriptionUpdate,
  validateBody(userSubscriptionSchema),
  authController.updateUser
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);

module.exports = authRouter;
