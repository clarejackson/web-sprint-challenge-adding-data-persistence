// build your `Task` model here
const db = require('../../data/dbConfig');


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

const result = (boolean) => {
  if (boolean === true) {
    return 1
  } else {
    return 0
  }
}

exports.addTask = async (task) => {
  const [id] = await db('tasks')
    .insert({
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: result(task.task_completed)
    })

  let tasks = await db('tasks')
      .select("*")
      .where("task_id", id)
      .first()

      return tasks.map(task => {
      if (task.task_completed === 1) {
        task.task_completed = true
      } else {
        task.task_completed = false
      }
      return tasks
    })
      
}
