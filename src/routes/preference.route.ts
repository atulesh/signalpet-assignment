import { savePreference } from "@/controllers/preference.controller";
import { validate } from "@/middleware";
import { validateSavePreference } from "@/models/dto/preference.dto";
import { Router } from "express";

const preferenceRouter = Router();

/**
 * Body: { "language": "fr" }
 */
preferenceRouter.post('/:userId/preferences', validateSavePreference, validate,  savePreference);


export default preferenceRouter;