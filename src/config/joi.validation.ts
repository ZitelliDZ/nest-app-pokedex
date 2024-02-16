import * as Joi from "joi";

export const JoiValidationSchema = Joi.object({
    PORT: Joi.number().default(3001),
    MONGO_URL: Joi.string().required(),
    DEFAULT_LIMIT_PAGINATION: Joi.number().default(10),
});
    