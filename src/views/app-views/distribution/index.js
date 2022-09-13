import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Catalogue = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/music`} component={lazy(() => import(`./music`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/music/manage-music`} />
    </Switch>
  </Suspense>
);

export default Catalogue;