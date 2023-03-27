import * as React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { apps } from '@cib/shared';
import { Dashboard } from '@cib/shell';
import { Link } from 'react-router-dom';
import i18n from '@cib/translator';
import { useTranslation } from 'react-i18next';
import { languages, useLanguageContext } from '@cib/translator';

export default function Home() {
  const { setCurrentLanguage, currentLanguage } = useLanguageContext();
  const { t } = useTranslation();
  return (
    <Dashboard>
      <Box p={2} dir={currentLanguage!.dir}>
        {apps.map(app => (
          <Link
            key={app.description}
            to={app.href}
            style={{ textDecoration: 'none' }}
          >
            <Card sx={{ m: 2, p: 2, display: 'flex' }}>
              <app.icon sx={{ m: 1 }} />
              <Typography sx={{ m: 1, fontWeight: 500 }} color="textPrimary">
                {app.description}
              </Typography>
            </Card>
          </Link>
        ))}
      </Box>
      <Box>
        {languages.map(({ code }) => (
          <button
            className="mx-3"
            key={code}
            onClick={() => {
              i18n.changeLanguage(code);
              setCurrentLanguage(languages.find(lang => lang.code === code));
            }}
          >
            {code}
          </button>
        ))}
      </Box>
    </Dashboard>
  );
}
