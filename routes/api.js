const router = require("express").Router();
const Transaction = require("../models/transaction");
const path = require('path');
// const Schema = mongoose.Schema;
router.get("/exercise", (req, res) => {
    console.log("**********", __dirname)
    res.sendFile("C:/Users/awads/OneDrive/Documents/Projects/workout-tracker/public/exercise.html");

  });

router.post('/api/workouts', (res, req) => {
    Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = router;