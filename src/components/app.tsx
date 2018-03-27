/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// React/Redux APIs
import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import * as featureActions from '../actions/featureActions'

// Styles and fonts
import 'emptykit.css'
import '../../assets/style.css'

// Components
import CoreFeature from './feature'

interface Props {
  actions: any
  featureData: any
}

export class App extends React.PureComponent<Props, {}> {
  render () {
    return (
      <div id='featurePage'>
        <CoreFeature featureData={this.props.featureData} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { featureData: state.featureData }
}

const mapDispatchToProps = (dispatch: any) => {
  return { actions: bindActionCreators(featureActions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
