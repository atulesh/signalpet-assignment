import request from 'supertest';
import app from "@/app"

describe('POST /api/translate', () => {
    it('should translate text to Spanish', async () => {
        const res = await request(app).post('/api/translate').send({
            text: ['Hello, how are you?'],
            targetLang: 'es'
        });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data.translatedText[0]).toBeDefined();
    })   

    it('should use Accept-Language header for default language', async () => {
        const res = await request(app).post('/api/translate')
        .set('Accept-Language', 'es')
        .send({
            text: ['Hello, how are you?'],
        });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data.translatedText[0]).toBeDefined();
    })

    it('should return 422 if invalid targetLang is provided', async () => {
        const res = await request(app).post('/api/translate').send({
            text: ['Hello, how are you?'],
            targetLang: 'ru'
        })    
        expect(res.status).toBe(422);
        expect(res.body.success).toBe(false);
        expect(res.body.errors[0].field).toBe('targetLang');
    })

    it('should return 422 if text is missing', async () => {
        const res = await request(app).post('/api/translate').send({
            targetLang: 'es'    
        })

        expect(res.status).toBe(422);
        expect(res.body.success).toBe(false);
        expect(res.body.errors[0].field).toBe('text');
    })

})