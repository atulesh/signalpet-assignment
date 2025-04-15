import { SupportedLanguage } from '@/constants/language.enum';
import { body } from 'express-validator';

export const validateTranslate = [
    body('text')
        .isArray({min:1})
        .withMessage('Text is required'),
    body('targetLang')
        .notEmpty()
        .isIn(Object.values(SupportedLanguage))
        .withMessage(`Invalid target language, must be one of: ${Object.values(SupportedLanguage).join(', ')}`)
];


export interface TranslateDto {
    text: string[];
    targetLang: SupportedLanguage;
}
