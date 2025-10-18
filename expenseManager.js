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

function listExpenses() {
  const expenses = readData();
  if (expenses.length === 0) {
    console.log("No expenses found");
    return;
  }
  console.log("ID  Date         Description       Amount");
  expenses.forEach((e) => {
    console.log(`${e.id}   ${e.date}   ${e.description}    $${e.amount}`);
  });
}

function deleteExpense(id) {
  const expenses = readData();

  const expense = expenses.filter((e) => e.id === Number(id));
  if (!expense.length) {
    console.log("Enter valid id");
    return;
  }
  writeData(expenses.filter((expense) => expense.id !== Number(id)));
  listExpenses(readData());
}

function updateExpense(id, description) {
  const expenses = readData();
  const expense = expenses.filter((e) => e.id === Number(id));
  if (!expense.length) {
    console.log("Enter valid id");
    return;
  }
  for (let expense of expenses) {
    if (expense.id === Number(id)) expense.description = description;
  }
  writeData(expenses);
  listExpenses(readData);
}

function summaryExpense(month) {
  const expenses = readData();
  if (expenses.length === 0) {
    console.log("no expenses");
    return;
  }

  //Validate month
  if (month) {
    const monthNum = parseInt(month);
    console.log(isNaN(parseInt(r)));
    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      console.log("Error: Month must be a number between 1 and 12.");
      return;
    }
    const monthlyExpenses = expenses.filter((e) => {
      const month = new Date(e.date).getMonth() + 1;
      return month === monthNum;
    });
    const monthlyExpense = monthlyExpenses.reduce((sum, e) => {
      return sum + e.amount;
    }, 0);
    console.log(`Monthly expense for ${month}: ${monthlyExpense}`);
    return;
  }

  //Total expenses if no month is passed
  const totalExpense = expenses.reduce((sum, e) => {
    return sum + e.amount;
  }, 0);
  console.log(`Total expenses: ${totalExpense}`);
}
module.exports = {
  addExpense,
  listExpenses,
  deleteExpense,
  updateExpense,
  summaryExpense,
};
