import { SupportedLanguage } from "@/constants/language.enum";
import { setUserPreference } from "@/services/preference.service";
import { Request, Response } from "express";

export const savePreference = (req: Request, res: Response) => {
    const { language } = req.body
    const { userId } = req.params;

    if(!userId) {
        res.status(400).json({ success: false, message: 'User ID is required' });
        return;
    }

    // check for supported language
    if(!Object.values(SupportedLanguage).includes(language)) {
        // TODO: handle the Error and Success response using util function
        res.status(400).json({
            success: false,
            message: `Invalid language, must be one of: ${Object.values(SupportedLanguage).join(', ')}`
        })
        return;
    }

    setUserPreference(userId, language)
    res.status(200).json({ success: true, message: `Preference saved successfully for '${userId}' to '${language}'` });
}