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


// [POST] /api/tasks

// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}
router.post('/', async (req, res, next) => {
  try {
    const tasks = await model.addTask(req.body)
    res.status(201).json(tasks)
  } catch (err) {
    next(err)
  }
})




module.exports = router;