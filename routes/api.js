const router = require("express").Router();
const Transaction = require("../models/transaction.js");
// const Schema = mongoose.Schema;


router.post('/api/workouts', async (res, req) => {
    Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = Transaction;