
const translationCache = new Map<string, string>();

export const getCachedTranslation = (key: string): string | undefined => {
    return translationCache.get(key);    
}

export const setCachedTranslation = (key: string, value: string): void => {
    translationCache.set(key, value);
}

export const buildCacheKey = (text: string, lang: string): string => {
    return `${text}-${lang}`;
};