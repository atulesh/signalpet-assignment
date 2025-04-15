import { env } from "@/config/env";
import { SupportedLanguage } from "@/constants/language.enum";
import { buildCacheKey, getCachedTranslation, setCachedTranslation } from "@/utils/cache.util";
import axios from "axios";

/**
 * Translate an array of string into target language using LibreTranslate
 * @param text - array of string to translate
 * @param targetLang - target language
 * @returns array of translated string
 */
export const translateUsingLibre = async (text: string[], targetLang: string): Promise<string[]> => {
    //  TODO: Currently it is caching one item at a time., need to cache whole array - for better performance [batched caching]
    const translations = await Promise.all(
        text.map(async (item) => {
            const cacheKey = buildCacheKey(item, targetLang);
            const cachedData = getCachedTranslation(cacheKey);
            if (cachedData) return cachedData;

            const res  = await axios.post(env.TRANSLATE_API_URL, {
                q: item,
                source: "auto", // auto detect source language
                target: targetLang,
                format: "text",
            });
            const translatedData = res.data.translatedText;
            setCachedTranslation(cacheKey, translatedData);
            return translatedData
        })
    )

    return translations;
};