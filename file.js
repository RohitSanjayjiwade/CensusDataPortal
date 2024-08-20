const fs = require('fs');

fs.readFile('/home/vaibhav/Desktop/popp.xlsx', (err, data) => {
  if (err) {
    return console.error("Error reading file:", err.message);
  }
  console.log("File read successfully!");
});