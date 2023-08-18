import mongoose, { Schema, Model, model } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    image: String,
  },

  { timestamps: true }
);

const User = mongoose.models.User || model("User", UserSchema);

export default User;
