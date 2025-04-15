import { SupportedLanguage } from '@/constants/language.enum';
import { body } from 'express-validator';

export const validateSavePreference = [
    body('language')
        .notEmpty()
        .trim()
        .withMessage('Language is required')
        .isIn(Object.values(SupportedLanguage))
        .withMessage(`Language must be one of: ${Object.values(SupportedLanguage).join(', ')}`),
];

