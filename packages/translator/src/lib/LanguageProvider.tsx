import react from 'react';
import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';
import { languages } from './languages';
type LanguageContextValue = {
  currentLanguage: any;
  setCurrentLanguage: any;
};
export const LanguageContext: any = createContext<LanguageContextValue>(
  undefined!
);
export const LanguageProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const currentLanguageCode = Cookies.get('i18next') || 'en';

  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find(lang => lang.code === currentLanguageCode)
  );
  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguageContext = (): LanguageContextValue => {
  return useContext(LanguageContext);
};
// export const LanguageProvider = () => {}
// export const useLanguageContext = () => {}
