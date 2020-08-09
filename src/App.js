import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/tracking" component={TrackingPage} /> */}
          <Route exact path="/tracking/:tracking_params" component={TrackingPage} />
          <Route path='*' exact={true} component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
