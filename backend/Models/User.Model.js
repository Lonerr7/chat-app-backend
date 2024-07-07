import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please enter your full name!'],
    maxLength: [20, 'Full name can not be that long!'],
  },
  username: {
    type: String,
    unique: [true, 'Username already exists!'],
    maxLength: [20, 'Username can not be that long!'],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'Password must be at least 6 characters'],
  },
  gender: {
    type: String,
    required: [true, 'Please, enter your gender'],
    enum: ['male', 'female'],
  },
  profilePic: {
    type: String,
    deafult: '',
  },
});

const User = mongoose.model('User', userSchema);
export default User;
