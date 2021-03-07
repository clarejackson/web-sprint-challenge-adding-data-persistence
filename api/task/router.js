// build your `/api/tasks` router here
const express = require('express');
const model = require('./model');

const router = express.Router();

//  [GET] /api/tasks

// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Each task must include project_name and project_description
// Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]

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





module.exports = router;