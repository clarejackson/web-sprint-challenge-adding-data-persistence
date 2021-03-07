// build your `Resource` model here
const db = require('../../data/dbConfig');

//  [GET] /api/resources

// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
exports.getResources = () => {
  return db('resources')
      .select("*")
}





// [POST] /api/resources

// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}