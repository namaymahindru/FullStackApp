import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
   
  },
  avatar: {
    type: String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fuser-profile.html&psig=AOvVaw04HjW935HGqg_SFSB3cq_w&ust=1720869564619000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDEiOywoYcDFQAAAAAdAAAAABAE"
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;