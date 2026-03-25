import { createContext, useContext, useState, ReactNode } from 'react';
import type { Language } from '@/i18n/translations';
import { t as translate } from '@/i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'it';
    const saved = localStorage.getItem('nexus_lang');
    return (saved === 'en' ? 'en' : 'it') as Language;
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('nexus_lang', l);
  };

  const toggleLanguage = () => {
    setLang(lang === 'it' ? 'en' : 'it');
  };

  const t = (section: string, key: string) => translate(section, key, lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const fallback: LanguageContextType = {
  lang: 'it',
  setLang: () => {},
  toggleLanguage: () => {},
  t: (section: string, key: string) => translate(section, key, 'it'),
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  return ctx ?? fallback;
};
