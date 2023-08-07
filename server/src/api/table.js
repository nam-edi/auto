const express = require("express");

const router = express.Router();

const data = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" },
  { name: "Michael Johnson", age: 40, city: "Chicago" },
  { name: "Emily Williams", age: 28, city: "San Francisco" },
  { name: "William Brown", age: 35, city: "Houston" },
  { name: "Olivia Davis", age: 22, city: "Miami" },
  { name: "Liam Martinez", age: 29, city: "Dallas" },
  { name: "Sophia Anderson", age: 33, city: "Seattle" },
  { name: "Noah Wilson", age: 31, city: "Denver" },
  { name: "Emma Rodriguez", age: 27, city: "Phoenix" },
  { name: "Aiden Martinez", age: 24, city: "San Diego" },
  { name: "Oliver Johnson", age: 26, city: "Austin" },
  { name: "Isabella Harris", age: 23, city: "Boston" },
  { name: "Mia Thompson", age: 34, city: "Portland" },
  { name: "Sophia White", age: 38, city: "Nashville" },
  { name: "Liam Hall", age: 39, city: "Atlanta" },
  { name: "Ava Martin", age: 21, city: "Miami" },
  { name: "Lucas Adams", age: 32, city: "Los Angeles" },
  { name: "Harper Martinez", age: 30, city: "New York" },
  { name: "Ethan Lee", age: 29, city: "San Francisco" },
  { name: "Amelia King", age: 37, city: "Chicago" },
  { name: "Alexander Wright", age: 28, city: "Dallas" },
  { name: "Ella Turner", age: 26, city: "Houston" },
  { name: "Daniel Parker", age: 24, city: "Seattle" },
  { name: "Sophia Wood", age: 25, city: "Denver" },
  { name: "Liam Lewis", age: 31, city: "Phoenix" },
  { name: "Olivia Morris", age: 23, city: "San Diego" },
  { name: "James Perez", age: 27, city: "Austin" },
  { name: "Ava Ward", age: 22, city: "Boston" },
  { name: "Benjamin Scott", age: 33, city: "Portland" },
  { name: "Emma Garcia", age: 34, city: "Nashville" },
  { name: "Lucas Adams", age: 35, city: "Atlanta" },
  { name: "Isabella Turner", age: 36, city: "Miami" },
  { name: "Noah Allen", age: 28, city: "Los Angeles" },
  { name: "Sophia Young", age: 30, city: "New York" },
  { name: "Ethan Moore", age: 31, city: "San Francisco" },
  { name: "Ava Green", age: 29, city: "Chicago" },
  { name: "Lucas Nelson", age: 32, city: "Dallas" },
  { name: "Mia Lewis", age: 27, city: "Houston" },
  { name: "Liam Davis", age: 24, city: "Seattle" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const offset = parseInt(req.query.offset) || 0;

  const paginatedData = data.slice(offset, offset + limit);

  res.json({
    lines: paginatedData,
    total: data.length,
  });
});

module.exports = router;
