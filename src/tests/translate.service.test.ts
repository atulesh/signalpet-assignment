import { SupportedLanguage } from "@/constants/language.enum";
import { translateUsingLibre } from "@/services/translate.service";

describe('translateUsingLibre', () => {
    it('should translate a phrase to spanish', async () => {
        const input = ['Hello, how are you?'];
        const result = await translateUsingLibre(input, SupportedLanguage.Spanish);
        console.log(result)
        expect(result[0]).toMatch(/Hola, ¿cómo estás?/);
    })
    it('should use cached value if available (indirectly verified)', async () => {
        const first = await translateUsingLibre(['Test'], SupportedLanguage.Spanish);
        const second = await translateUsingLibre(['Test'], SupportedLanguage.Spanish);
    
        expect(second[0]).toEqual(first[0]);
      });
});