#!/usr/bin/env node

const { program } = require("commander");
const expenseManager = require("./expenseManager");

//Configure commander: add expense
program
  .command("add")
  .description("add new expense")
  .requiredOption("--description <desc>", "Expense description")
  .requiredOption("--amount <amount>", "Expense amount")
  .action((options) => {
    expenseManager.addExpense(options.description, parseFloat(options.amount));
  });

program.parse(process.argv);
