// build your `/api/resources` router here
const express = require('express');
const { router } = require('../server');
const model = require('./model');

//  [GET] /api/resources

// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
router.get('/', async (req, res, next) => {
  try {
    const resources = await model.getResources()
    res.status(200).json(resources)
  } catch (err) {
    next(err)
  }
})





// [POST] /api/resources

// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}





module.exports = router;