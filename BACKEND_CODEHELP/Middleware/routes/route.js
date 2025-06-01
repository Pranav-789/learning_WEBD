const express = require("express");
const router = express.Router();

//middleware
const auth = function (req, res, next) {
  console.log("Im inside auth middleware");

  //dummy user
  req.user = { userId: 1, role: "student" };

  if (req.user) {
    //if valid user proceed to next middleware
    next();
  } else {
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("Im inside student middleware");

  if (req.user.role === "student") {
    //if valid user proceed to next middleware
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied, this route is for students",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("Im inside admin middleware");

  if (req.user.role === "admin") {
    //if valid user proceed to next middleware
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied, this route is for admin",
    });
  }
};

//routes

router.get("/student", auth, isStudent, (req, res) => {
  console.log("I'm inside student route");
  res.send(`Student specific page`);
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I'm inside admin route");
  res.send(`Admin specific page`);
});

module.exports = router;
