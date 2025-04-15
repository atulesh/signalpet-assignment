import dotenv from 'dotenv';

dotenv.config();

const required = (key: string) => {
    const val = process.env[key];
    if (!val) {
        throw new Error(`${key} is required`);
    }
    return val;
};

export const env = {
    PORT: process.env.PORT || 5000,
    CORS_ORIGIN: required('CORS_ORIGIN'),
    TRANSLATE_API_URL: required('TRANSLATE_API_URL'),
};
