// build your `/api/tasks` router here
const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await model.getTasks()
    res.status(200).json(tasks)
  } catch (err) {
    next(err)
  }
})


router.post('/', async (req, res, next) => {
  try {
    const tasks = await model.addTask(req.body)
    res.status(201).json(tasks)
  } catch (err) {
    next(err)
  }
})




module.exports = router;