import { SupportedLanguage } from "@/constants/language.enum";
import { getUserPreference } from "@/services/preference.service";
import { NextFunction, Request, Response } from "express";


export const defaultLang = (req: Request, res: Response, next: NextFunction) => {
    let {targetLang, userId} = req.body
    console.log(req.body)

    if(!targetLang) {
        //check for user preference
        if(userId){
            const preferredLang = getUserPreference(String(userId));
            if(preferredLang){
                req.body.targetLang = preferredLang
                return next()
            }
        }
        // fall-back to Accept-Language header
        const defaultLang = req.headers['accept-language']?.slice(0, 2).split(',')[0] || SupportedLanguage.English;

        if(Object.values(SupportedLanguage).includes(defaultLang as SupportedLanguage)) req.body.targetLang = defaultLang;
        else req.body.targetLang = SupportedLanguage.English
    }

    next();
}