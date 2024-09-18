const express = require('express');
const router = express.Router();
const { createTodo } = require('../controller/createTodo'); // Corrected import

router.post('/createTodo', createTodo); // Corrected route path

module.exports = router;
