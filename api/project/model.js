// build your `Project` model here
const db = require('../../data/dbConfig');

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

const result = (boolean) => {
  if (boolean === true) {
    return 1
  } else {
    return 0
  }
}

exports.addProject = async (project) => {
  const [id] = await db('projects')
    .insert({
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: result(project.project_completed)
    })

  let projects = await db('projects')
      .select("*")
      .where("project_id", id)
      .first()
    
      return projects.map(project => {
      if (project.project_completed === 1) {
        project.project_completed = true
      } else {
        project.project_completed = false
      }
      return projects
    })
      
}