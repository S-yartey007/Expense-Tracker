const { readData, writeData } = require("./utils/helpers");

function addExpense(description, amount) {
  if (isNaN(amount) || amount <= 0) {
    console.log("Error: Enter a valid amount");
    return;
  }

  const expenses = readData();
  const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
  const newExpense = {
    id,
    date: new Date().toISOString().split("T")[0],
    description,
    amount,
  };

  expenses.push(newExpense);
  writeData(expenses);
  console.log(`Expense added successfully (ID: ${id})`);
}

module.exports = {
  addExpense,
};
