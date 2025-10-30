const User = require("../models/user.js");

module.exports.renderSignUpPage = (req, res, next) => {
  res.render("users/signup.ejs");
};

module.exports.SignUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({
      username,
      email,
    });
    let regUser = await User.register(newUser, password);
    req.login(regUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "welcome to Bnbliss");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.renderLogInPage = (req, res, next) => {
  res.render("users/login.ejs");
};

module.exports.LogIn = (req, res) => {
  req.flash("success", `welcome user @${req.user.username}`);
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.LogOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out");
    res.redirect("/listings");
  });
};
