/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Redux API
import { Reducer } from 'redux'

// Feature storage
import * as storage from '../storage'

// Types
import { Feature } from '../types/featureTypes'
import { types } from '../types/actionsTypes'

const featureReducer: Reducer<Feature.State | undefined> = (state: Feature.State | undefined, action: any) => {
  if (state === undefined) {
    state = storage.load()
  }

  const payload = action.payload
  const startingState = state

  switch (action.type) {
    case types.ADD:
      state = { ...state, bravePeople: [ ...state.bravePeople, payload.item ] }
      break
  }

  if (state !== startingState) {
    storage.debouncedSave(state)
  }

  return state
}

export default featureReducer
