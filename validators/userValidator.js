const { body, validationResult } = require("express-validator");

const userValidationRules = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Le nom est requis")
      .isLength({ min: 2 })
      .withMessage("Le nom doit contenir au moins 2 caractères"),

    body("email")
      .notEmpty()
      .withMessage("L'e-mail est requis")
      .isEmail()
      .withMessage("L'e-mail doit être une adresse valide")
      .isLength({ min: 5 })
      .withMessage("L'e-mail doit contenir au moins 5 caractères"),

    body("password")
      .notEmpty()
      .withMessage("Le mot de passe est requis")
      .isLength({ min: 8 })
      .withMessage("Le mot de passe doit contenir au moins 8 caractères"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ errors: errors.array() });
};

module.exports = {
  userValidationRules,
  validate,
};
