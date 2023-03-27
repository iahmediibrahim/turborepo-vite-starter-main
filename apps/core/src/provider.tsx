import { theme } from '@cib/shared';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider, useLanguageContext } from '@cib/translator';
function Provider({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageProvider>
  );
}

export default Provider;
