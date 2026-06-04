const express = require("express");

const router = express.Router();

const Submission = require("../models/Submission");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } =
      req.body;

    await Submission.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message:
        "Form Submitted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;