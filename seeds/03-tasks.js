
exports.seed = async function(knex) {
  await knex("tasks").insert([  
    { task_id: 1, task_description: "Fork", task_notes: null, task_completed: 1, project_id: 1 }, 
		{ task_id: 2, task_description: "Clone", task_notes: null, task_completed: 1, project_id: 1 },
    { task_id: 3, task_description: "npm i", task_notes: null, task_completed: 1, project_id: 1 },
    { task_id: 4, task_description: "Zoom call", task_notes: null, task_completed: 1, project_id: 1 },
		{ task_id: 5, task_description: "Fork", task_notes: null, task_completed: 0, project_id: 2 },
    { task_id: 6, task_description: "Clone", task_notes: null, task_completed: 0, project_id: 2 },
    { task_id: 7, task_description: "Install dependencies", task_notes: null, task_completed: 0, project_id: 2 },
    { task_id: 8, task_description: "Testing", task_notes: null, task_completed: 0, project_id: 2 },
	])
};
