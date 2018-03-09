var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
  });

  initializeConnection();

  //Choose product
  function products() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      getProduct(res);
    });
  }
  
  //Get product
  function getProduct(inventory) {
     inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Product ID?",
           {
      ])
  }

  //Quantity of product
  function howMany(product) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "quantity",
          message: "How many would you like? [Quit with Q]",
          validate: function(val) {
          }
        }
      ])
     
