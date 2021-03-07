
exports.seed = async function(knex) {
  await knex("resources").insert([   
		{ resource_id: 1, resource_name: "TK", resource_description: null },
		{ resource_id: 2, resource_name: "Jessica", resource_description: null },
    { resource_id: 3, resource_name: "Canvas", resource_description: null },
    { resource_id: 4, resource_name: "Documentation", resource_description: null },
	])
};
