/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { App } from '../../src/components/app'
import { defaultState } from '../../src/storage'

describe('app dumb component test', () => {
  it('matches the snapshot', () => {
    const component = <App actions={{}} featureData={defaultState} />
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders the component', () => {
    const wrapper = shallow(<App actions={{}} featureData={defaultState} />)
    const assertion = wrapper.find('#featurePage').length
    expect(assertion).toBe(1)
  })
})
