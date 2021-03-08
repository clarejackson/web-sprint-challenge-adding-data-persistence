// build your `/api/projects` router here
const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await model.getProjects()
    res.status(200).json(projects)
  } catch (err) {
    next(err)
  }
})


// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
// not working
router.post('/', async (req, res, next) => {
  try {
    const projects = await model.addProject(req.body)
    res.status(201).json(projects)
  } catch (err) {
    next(err)
  }
})


module.exports = router;