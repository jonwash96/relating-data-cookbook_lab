const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

router.get("/register", (req, res) => {
    res.render("users/register.ejs");
});

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

router.post("/login", async (req, res) => {
    const userInDB = await User.findOne({ username: req.body.username }).select('+password');
    if (!userInDB) {
        req.session.message = "An incorect username was entered. Please Try Again"
        return res.redirect('/auth/login');
    };
    const isValidPassword = bcrypt.compareSync(req.body.password, userInDB.password);
    if (!isValidPassword) return res.send(`Password Incorrect`);

    req.session.user = userInDB;
    req.session.save(() => res.redirect(`/`));
});

router.post("/register", async (req, res) => {
    const userInDB = await User.findOne({ username: req.body.username });
    if (userInDB) {
        req.session.message = `A user with username ${req.body.username} already exist. Please choose another one.`;
        return res.redirect('/auth/register');
    };
    if (req.body.password !== req.body.confirmPassword) {
        req.session.message = "Passwords mmust match! Please check your password and try again";
        return res.redirect('/auth/register');
    };
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);
    req.session.user = newUser;
    req.session.message = `Welcome to Respie, ${newUser.username}!`;

    req.session.save(() => res.redirect(`/`));
});

module.exports = router;
