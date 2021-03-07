// build your `Project` model here
const db = require('../../data/dbConfig');


//  [GET] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]

exports.getProjects = async () => {
  const  projects = await db('projects')
      .select("*")
      return projects.map(project => {
      if (project.project_completed === 1) {
        project.project_completed = true
      } else {
        project.project_completed = false
      }
      return projects
    })
      
}

// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}