/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// React/Redux APIs
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Main component
import CoreFeature from './components/app'

// Main store
import store from './store'

render((
  <Provider store={store}>
    <CoreFeature />
  </Provider>
  ), document.getElementById('root')
)
