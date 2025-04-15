import { SupportedLanguage } from '@/constants/language.enum';

export interface TranslateDto {
    text: string[];
    targetLang: SupportedLanguage;
}
