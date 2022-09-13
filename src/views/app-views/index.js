import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/new`} component={lazy(() => import(`./new`))} />
        <Route path={`${APP_PREFIX_PATH}/distribution`} component={lazy(() => import(`./distribution`))} />
        <Route path={`${APP_PREFIX_PATH}/pages`} component={lazy(() => import(`./pages`))} />

        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/new/overview`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
