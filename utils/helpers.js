const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../expenses.json");

//Read json file
function readData() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data || "[]");
}

// Helper to write expenses
function writeData(expenses) {
  fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2));
}

module.exports = {
  readData,
  writeData,
};
