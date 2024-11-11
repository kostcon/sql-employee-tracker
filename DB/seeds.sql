INSERT INTO department (name) VALUES
('Sales'),
('Customer Service'),
('Finance'),
('Property');

INSERT INTO role (title, salary, department_id) VALUES
('Sales Rep', 65000, 1),
('Sales Manager', 95000, 1),
('Customer Support Office', 55000, 2),
('Customer Liason', 82000, 2),
('Accountant', 65000, 3),
('Analyst', 100000, 3),
('Property Manager', 150000, 4),
('Property Inspector', 45000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Smith', 1, NULL),
('Karen', 'Jones', 1, 1),
('Bob', 'Marley', 2, NULL),
('Peter', 'Parker', 2, 2 ),
('Michael', 'Jackson', 3, NULL),
('Jimmy', 'Barnes', 3, 3),
('Santa', 'Claus', 4, NULL),
('Freddy', 'Krueger', 4, 4);