const router = require("express").Router();
const { Workout } = require("../models/transaction");
const path = require('path');
//show the exercise webpage
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

  });

//show the stats webpage
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

//   * Add exercises to the most recent workout plan.

//   * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//   * View the total duration of each workout from the past seven workouts on the `stats` page.

//   * Add new exercises to a new workout plan.

//get the combined weight and total duration of the past 7 workouts in range
router.get('/api/workouts/range', (req, res) => {
    console.log("CALLING RANGE ROUTE")
    Workout.find().sort({ weight: -1 }).limit(7)
    .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts)
    })
    .catch(err => {
        console.log("RANGE ERROR", err)
        res.status(400).json(err);
    });
})

//get all workouts
router.get("/", (req, res) => {
    Workout.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((error) => {
        res.json(error);
      });
  });

//get a specific workout

router.get("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findById({ _id: params.id })
      .then((workoutData) => res.json(workoutData))
      .catch((error) => res.status(400).json(error));
  });

//get most recent workout
router.get('/api/workouts', (req, res) => {
    Workout.find({}, {}, { sort: { 'created_at' : -1 } })
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout)
    })
    .catch(err => {
        console.log(err)
      res.status(400).json(err);
    });
    })

//add exercises
router.post('/api/workouts', ({ body }, res) => {
    Workout.create({})
    .then(dbTransaction => {
        console.log(dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
        console.log(err)
      res.status(400).json(err);
    });
})

//update workout
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: req.body}},
        {new: true, runValidators: true})
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
})

module.exports = router;