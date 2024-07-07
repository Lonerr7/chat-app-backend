import User from '../Models/User.Model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Password do not match' });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hasing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Setting default profile pictures
    const fullNameArr = fullName.split(' ');
    const mockPic = `https://avatar.iran.liara.run/username?username=${fullNameArr[0]}+${fullNameArr[1]}`;

    const newUser = await User.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: mockPic,
    });

    if (newUser) {
      newUser.password = undefined;

      return res.status(201).json({
        user: newUser,
      });
    }

    res.status(400).json({ error: 'Invalid user data' });
  } catch (error) {
    console.error(`Error in signup controller`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = (req, res) => {
  console.log(`login user`);
};

export const logout = (req, res) => {
  console.log(`logout user`);
};
