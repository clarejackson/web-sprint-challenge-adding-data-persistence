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

const result = (boolean) => {
  if (boolean === true || boolean === 1 || boolean === "1") {
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
    
      if (projects.project_completed === 1) {
        projects.project_completed = true
      } else {
        projects.project_completed = false
      }
      return projects
      
}