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

program
  .command("list")
  .description("list the expenses")
  .action(() => {
    expenseManager.listExpenses();
  });

program
  .command("delete")
  .description("delete an expense")
  .requiredOption("--id <id>", "Expense id")
  .action((options) => {
    expenseManager.deleteExpense(options.id);
  });

program
  .command("update")
  .description("update an expense")
  .requiredOption("--id <id>", "Expense id")
  .requiredOption("--description <desc>", "Expense description")
  .action((options) => {
    expenseManager.updateExpense(options.id, options.description);
  });

program
  .command("summary")
  .description("give the total expense or monthly total expenses")
  .option("--month <month>", "total expenses")
  .action((options) => {
    expenseManager.summaryExpense(options.month);
  });

program.parse(process.argv);
