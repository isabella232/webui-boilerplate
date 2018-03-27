/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Types
import { Feature } from './types/featureTypes'

// Helpers
import { debounce } from './common/debounce'

// Key to be used by localStorage
const keyName = 'feature-data'

export const defaultState: Feature.State = {
  bravePeople: []
}

export const load = (): Feature.State => {
  const data = window.localStorage.getItem(keyName)
  let state = defaultState
  if (data) {
    try {
      state = JSON.parse(data)
    } catch (error) {
      console.error('Could not parse local storage data: ', error)
    }
  }
  return state
}

export const debouncedSave = debounce<Feature.State>((data: Feature.State) => {
  if (data) {
    window.localStorage.setItem(keyName, JSON.stringify(data))
  }
}, 50)
