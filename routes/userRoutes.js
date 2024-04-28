const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validationResult } = require("express-validator"); // Importation de validationResult
const { userValidationRules } = require("../validators/userValidator"); // Importation de userValidationRules

// Get all users
// GET sur localhost:3000/api/users
router.get("/", userController.getAllUsers);

// Get ONE user
// localhost:3000/api/users/9230774h2203HDkdj
router.get("/:id", userController.getOneUser);

// Create a user
// POST sur localhost:3000/api/users
router.post(
  "/",
  userValidationRules(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
  userController.register
);

// Login a user
// POST sur localhost:3000/api/users/login
router.post(
  "/login",
  userValidationRules(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
  userController.login
);

// Edit a user
router.put(
  "/:id",
  userValidationRules(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
  userController.editUser
);

// Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;
