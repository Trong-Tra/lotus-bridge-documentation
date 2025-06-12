import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "vi";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

type TranslationValue = string | Record<string, unknown>;
type Translations = Record<string, TranslationValue>;

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation function that handles nested keys and parameters
const getTranslation = (
  translations: Translations,
  key: string,
  params?: Record<string, string | number>
): string => {
  const keys = key.split(".");
  let value: unknown = translations;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  if (typeof value !== "string") {
    return key;
  }

  // Replace parameters in the string
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }

  return value;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to English
    const savedLanguage = localStorage.getItem("lotus-bridge-language");
    return (savedLanguage as Language) || "en";
  });

  // Load translations dynamically
  const [translations, setTranslations] = useState<
    Record<Language, Translations>
  >({
    en: {},
    vi: {},
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("lotus-bridge-language", language);
  }, [language]);

  useEffect(() => {
    // Load translations
    const loadTranslations = async () => {
      try {
        const [enTranslations, viTranslations] = await Promise.all([
          import("../translations/en.json").then((module) => module.default),
          import("../translations/vi.json").then((module) => module.default),
        ]);

        setTranslations({
          en: enTranslations as Translations,
          vi: viTranslations as Translations,
        });
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    loadTranslations();
  }, []);

  const t = (key: string, params?: Record<string, string | number>): string => {
    return getTranslation(translations[language], key, params);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleLanguageChange, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
