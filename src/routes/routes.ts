import { translateText } from '@/controllers/translate.controller';
import { defaultLang, validate } from '@/middleware';
import { validateTranslate } from '@/models/dto/translate.dto';
import { Router } from 'express';

const router = Router();

router.post('/translate', defaultLang, validateTranslate, validate, translateText);

export default router;
