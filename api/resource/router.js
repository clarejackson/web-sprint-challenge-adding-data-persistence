// build your `/api/resources` router here
const express = require('express');
const model = require('./model');

const router = express.Router()


router.get('/', async (req, res, next) => {
  try {
    const resources = await model.getResources()
    res.status(200).json(resources)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const resource = await model.addResource(req.body)
    res.status(201).json(resource)
  } catch (err) {
    next(err)
  }
})




module.exports = router;