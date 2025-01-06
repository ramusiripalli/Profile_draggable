const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile.js");

router.get("/", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

router.post("/", async (req, res) => {
  const profile = new Profile(req.body);
  await profile.save();
  res.status(201).json(profile);
});

module.exports = router;
