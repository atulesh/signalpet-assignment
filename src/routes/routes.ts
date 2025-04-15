import { translateText } from '@/controllers/translate.controller';
import { defaultLang } from '@/middleware/defaultLang.middleware';
import { Router } from 'express';

const router = Router();

router.post('/translate', defaultLang, translateText);

export default router;
