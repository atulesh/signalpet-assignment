import { SupportedLanguage } from "@/constants/language.enum";
import { getUserPreference, setUserPreference } from "@/services/preference.service";

describe('Preference Service', () => {
    const userId = '123';
  
    it('should set a language preference for a user', () => {
      setUserPreference(userId, SupportedLanguage.German);
      const result = getUserPreference(userId);
  
      expect(result).toBe(SupportedLanguage.German);
    });
  
    it('should return undefined for a user with no preference set', () => {
      const unknownUser = '456';
      const result = getUserPreference(unknownUser);
  
      expect(result).toBeUndefined();
    });
  });