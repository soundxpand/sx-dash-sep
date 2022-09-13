import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/overview`} component={lazy(() => import(`./overview`))} />
      <Route path={`${match.url}/demo/analytic`} component={lazy(() => import(`./demo/analytic`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/overview`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;