const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.post("/api/exercises", (req, res) => {
  Exercise.create({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/exercises", (req, res) => {
  Exercise.find()
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/exercises/:id", ({ body, params }, res) => {
  Exercise.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
  )
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
