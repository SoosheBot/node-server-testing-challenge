const Cohorts = require("./model");

const router = require("express").Router();

router.get("/", (req, res) => {
  Cohorts.all().then(cohorts => {
    res.status(201).json(cohorts);
  })
  .catch(({name, message, stack, code}) => {
    console.log({ name, message, stack, code});
    res.status(500).json({ name, message, stack, code})
  })
});

module.exports = router;