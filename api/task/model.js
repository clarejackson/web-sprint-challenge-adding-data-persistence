// build your `Task` model here
const db = require('../../data/dbConfig');


//  [GET] /api/tasks

// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Each task must include project_name and project_description
// Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]
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

exports.getTasks = async () => {
  const tasks = await db('tasks as t')
      .join("projects as p", "t.project_id", "p.project_id")
      .select(
        "t.task_id", 
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
      )
      return tasks.map(task => {
          if (task.task_completed === 1) {
            task.task_completed = true
          } else {
            task.task_completed = false
          }
          return tasks
        })
}

// [POST] /api/tasks

// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}


