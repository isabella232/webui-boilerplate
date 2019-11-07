/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// React/Redux APIs
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import LightTheme from 'brave-ui/theme/brave-default'
import DarkTheme from 'brave-ui/theme/brave-dark'
import BraveCoreThemeProvider from './common/BraveCoreThemeProvider'

// Utils
import 'emptykit.css'

// Fonts
import '../fonts/poppins.css'
import '../fonts/muli.css'

// Main component
import CoreFeature from './components/app'

// Main store
import store from './store'

function initialize () {
  render(
    (
    <Provider store={store}>
      <BraveCoreThemeProvider
        initialThemeType={'System'}
        dark={DarkTheme}
        light={LightTheme}
      >
        <CoreFeature />
      </BraveCoreThemeProvider>
    </Provider>
    ),
    document.getElementById('root'))
}

// Perform DOM-dependent initialization when ready
document.addEventListener('DOMContentLoaded', initialize)
