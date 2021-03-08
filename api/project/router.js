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


router.post('/', async (req, res, next) => {
  try {
    const projects = await model.addProject(req.body)
    res.status(201).json(projects)
  } catch (err) {
    next(err)
  }
})


module.exports = router;