import React, { lazy, Suspense } from 'react';
import './styles/base.scss';

const Home = lazy(() => import('./pages/Home'));

const App = (): JSX.Element => (
  <Suspense fallback="Loading...">
    <Home />
  </Suspense>
);

export default App;
