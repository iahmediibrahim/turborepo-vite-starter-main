import React from 'react';
import { Baseline, Dashboard } from '@cib/shell';
import { theme } from '@cib/shared';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './provider';

const CoreApp = React.lazy(() => import('./routes'));
const LoginApp = React.lazy(() => import('@cib/login'));
const PostsApp = React.lazy(() => import('@cib/posts'));

function DefaultFallback({ children, fallback }) {
  return (
    <React.Suspense fallback={fallback || <Dashboard />}>
      {children}
    </React.Suspense>
  );
}

function Apps() {
  return (
    <Switch>
      {/* Applications */}
      <Route path="/login">
        <DefaultFallback>
          <LoginApp />
        </DefaultFallback>
      </Route>

      <Route path="/posts">
        <DefaultFallback>
          <PostsApp />
        </DefaultFallback>
      </Route>

      <Route path="/">
        <DefaultFallback>
          <CoreApp />
        </DefaultFallback>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <>
      <Baseline />
      <Provider>
        <Helmet>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Helmet>
        <BrowserRouter basename={process.env.BASE_URL || '/'}>
          <Apps />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
