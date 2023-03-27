import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './App';
import i18n from '@cib/translator';
// webfonts
import '@cib/shared/fonts/inter/inter.css';

if (import.meta.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    environment: Boolean(import.meta.env.BASE_URL) ? 'review' : 'production',
    dsn: import.meta.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1,
    initialScope: scope => {},
    ...(import.meta.env.REACT_APP_HEAD_COMMIT
      ? { release: import.meta.env.REACT_APP_HEAD_COMMIT }
      : {})
  });
}
console.log('i18n', i18n);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
