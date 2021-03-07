// build your `Resource` model here
const db = require('../../data/dbConfig');

//  [GET] /api/resources

// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
const getResources = () => {
  return db('resources')
      .select("*")
}

// [POST] /api/resources

// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
const addResource = async (resource) => {
  const [id] = await db('resources')
    .insert({
      resource_name: resource.resource_name,
      resource_description: resource.resource_description
    })
    return db('resources')
        .select("*")
        .where("resource_id", id)
        .first()
}

module.exports = {
  getResources,
  addResource,
}

