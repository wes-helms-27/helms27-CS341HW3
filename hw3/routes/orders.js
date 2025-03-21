var express = require('express');
var router = express.Router();

// Returns a JSON array of orders
router.get('/', function(req, res, next) {
  const orders = [
    { topping: "chocolate", quantity: 5 },
    { topping: "vanilla", quantity: 3 },
    { topping: "strawberry", quantity: 7 },
  ];
  // Sets the appropriate headers and sends a JSON response
  res.json(orders);
});

// Records the incoming data and returns a JSON array of orders
router.post("/", function (req, res, next) {
  console.log("POST received:", req.body);
  const orders = [
    { topping: "blueberry", quantity: 4 },
    { topping: "lemon", quantity: 6 },
  ];
  res.json(orders);
});

module.exports = router;
