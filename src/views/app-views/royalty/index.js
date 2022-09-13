import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/accounting`} />
      <Route path={`${match.url}/reports`} component={lazy(() => import(`./reports`))} />
      <Route path={`${match.url}/accounting`} component={lazy(() => import(`./accounting`))} />
    </Switch>
  </Suspense>
);

export default Pages;