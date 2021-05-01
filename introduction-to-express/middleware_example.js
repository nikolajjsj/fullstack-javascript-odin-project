const express = require('express');
const app = express();

// Example of a middleware function
let middleware_function = function(req, res, next) {
  // ... perform some operations
  next();
};

// Middleware addded with use() for all routes and verbs
app.use(middleware_function);

// Middleware added with use() for a specific route
app.use('/some_route', middleware_function);

// Middleware function added for a specific HTTP verb and route
app.get('/', middleware_function);

app.listen(3000);
