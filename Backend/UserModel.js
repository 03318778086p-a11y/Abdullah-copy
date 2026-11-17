import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Image: String,
  fname:String,
  lname:String
});

const User = mongoose.model("User", UserSchema);

export default User;
