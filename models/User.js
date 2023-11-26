const { Schema, model } = require("mongoose");
const { handleSaveError, preUpdate } = require("./hooks");

const { emailRegexp } = require("../models/hooks");

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Password is required"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "Email is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", preUpdate);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

module.exports = User;
