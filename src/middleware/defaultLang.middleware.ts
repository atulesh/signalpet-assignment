import { SupportedLanguage } from "@/constants/language.enum";
import { NextFunction, Request, Response } from "express";


export const defaultLang = (req: Request, res: Response, next: NextFunction) => {
    const lang = req.body.targetLang;
    if(!lang) {
        const defaultLang = req.headers['accept-language']?.slice(0, 2).split(',')[0] || SupportedLanguage.English;

        if(Object.values(SupportedLanguage).includes(defaultLang as SupportedLanguage)) req.body.targetLang = defaultLang;
        else req.body.targetLang = SupportedLanguage.English
    }

    next();
}