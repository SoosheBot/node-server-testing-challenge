const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(201).json({ router});
});

module.exports = router;