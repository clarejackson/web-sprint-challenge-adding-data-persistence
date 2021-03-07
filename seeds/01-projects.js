
exports.seed = async function(knex) {
  await knex("projects").insert([   
		{ project_id: 1, project_name: "Node-DB1", project_description: null, project_completed: 1 },
		{ project_id: 2, project_name: "Node-DB2", project_description: null, project_completed: 0 }
	])
};
