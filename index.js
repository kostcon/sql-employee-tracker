const inquirer = require("inquirer");
const dbOps = require("./DB/dbOperations");

const mainMenu = async () => {
  const { action } = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Exit",
    ],
  });

  switch (action) {
    case "View all departments":
      console.table(await dbOps.getDepartments());
      break;
    case "View all roles":
      console.table(await dbOps.getRoles());
      break;
    case "View all employees":
      console.table(await dbOps.getEmployees());
      break;
    case "Add a department":
      const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter the department name:",
      });
      await dbOps.addDepartment(name);
      break;
    case "Add a role":
      const { title, salary, department_id } = await inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "Enter the role title:",
        },
        {
          type: "input",
          name: "salary",
          message: "Enter the role salary:",
        },
        {
          type: "input",
          name: "department_id",
          message: "Enter the department ID for this role:",
        },
      ]);
      await dbOps.addRole(title, salary, department_id);
      break;
    case "Add an employee":
      const { first_name, last_name, role_id, manager_id } =
        await inquirer.prompt([
          {
            type: "input",
            name: "first_name",
            message: "Enter the employee first name:",
          },
          {
            type: "input",
            name: "last_name",
            message: "Enter the employee last name:",
          },
          {
            type: "input",
            name: "role_id",
            message: "Enter the role ID for this employee:",
          },
          {
            type: "input",
            name: "manager_id",
            message:
              "Enter the manager ID for this employee (leave blank if none):",
            default: null,
          },
        ]);
      await dbOps.addEmployee(
        first_name,
        last_name,
        role_id,
        manager_id || null
      );
      break;
    case "Exit":
      process.exit();
  }

  await mainMenu(); // Return to the main menu after completing an action
};

console.log("Welcome.... to the Employee Managent System");
mainMenu().catch(console.error);
