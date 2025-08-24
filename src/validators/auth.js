import {check} from 'express-validator';

export const signupValidate = [
  check('name').notEmpty().withMessage('Name is required').trim(),

  check('email')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .notEmpty()
    .withMessage('Email is required')
    .normalizeEmail(),

  check('password')
    .isLength({min: 8})
    .withMessage('Password must be at least 8 characters long')
    .notEmpty()
    .withMessage('Password is required'),
];

export const signinValidate = [
  check('email')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .notEmpty()
    .withMessage('Email is required')
    .normalizeEmail(),

  check('password').notEmpty().withMessage('Password is required'),
];
