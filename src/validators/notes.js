import { check } from 'express-validator';

export const createNoteValidator = [
  check('title').notEmpty().withMessage('Title is required'),
  check('content').notEmpty().withMessage('Content is required'),
];

export const updateNoteValidator = [
  check('title').optional().notEmpty().withMessage('Title is required'),
  check('content').optional().notEmpty().withMessage('Content is required'),
];

