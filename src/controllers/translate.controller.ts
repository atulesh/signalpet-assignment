import { translateUsingLibre } from '@/services/translate.service';
import { Request, Response } from 'express';

export const translateText = async (req: Request, res: Response) => {
    const { text, targetLang } = req.body;

    const translatedText = await translateUsingLibre(text, targetLang);
    res.status(200).json({
        success: true,
        data: { translatedText, targetLang },
        message: 'Text translated successfully',
    });
};
