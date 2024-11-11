const db = require("./db");

class DatabaseOperations {
  async getDepartments() {
    const res = await db.query("SELECT * FROM department");
    return res.rows;
  }

  async getRoles() {
    const res = await db.query("SELECT * FROM role");
    return res.rows;
  }

  async getEmployees() {
    const res = await db.query("SELECT * FROM employee");
    return res.rows;
  }

  async addDepartment(name) {
    await db.query("INSERT INTO department (name) VALUES ($1)", [name]);
    console.log(`Department ${name} added.`);
  }

  async addRole(title, salary, department_id) {
    await db.query(
      "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)",
      [title, salary, department_id]
    );
    console.log(`Role ${title} added.`);
  }

  async addEmployee(first_name, last_name, role_id, manager_id) {
    await db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
      [first_name, last_name, role_id, manager_id]
    );
    console.log(`Employee ${first_name} ${last_name} added.`);
  }
}
module.exports = new DatabaseOperations();
