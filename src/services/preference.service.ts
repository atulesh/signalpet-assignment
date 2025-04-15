import { SupportedLanguage } from "@/constants/language.enum";

// In-memory store for now - later can be stored to DB or redis 
const userLanguagePref = new Map<string, SupportedLanguage>();

export const setUserPreference = (userId: string, language: SupportedLanguage) => {
    userLanguagePref.set(userId, language);
    console.log(userLanguagePref)
}

export const getUserPreference = (userId: string): SupportedLanguage | undefined => {
    return userLanguagePref.get(userId);
};