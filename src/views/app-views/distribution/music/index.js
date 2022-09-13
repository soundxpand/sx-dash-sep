import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ManageMusic from './manage-music'
import UploadMusic from './upload-music'
import MuiscDetail from './details'

const Release = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/release-list`} />
			<Route path={`${match.url}/upload-music`} component={UploadMusic} />
			<Route path={`${match.url}/details/:id`} component={MuiscDetail} />
			<Route path={`${match.url}/manage-music`} component={ManageMusic} />
		</Switch>
	)
}

export default Release

