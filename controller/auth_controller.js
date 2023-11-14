const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

module.exports = {
    login: async (req, res) => {

        try {
            const userLogin = req.body;

            const user = await User.findOne({ email: userLogin.email });
            if (!user) throw new Error("Email not found");

            if (userLogin.password !== user.password) throw new Error("Password not match");

            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
            res.json({
                message: "success login",
                token: token,
                userID: user._id
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }

    },

    registes: async (req, res) => {
        res.json("register")
    }
}
