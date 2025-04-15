import { translateText } from '@/controller/translate.controller';
import { Router } from 'express';

const router = Router();

router.post('/translate', translateText);

export default router;
