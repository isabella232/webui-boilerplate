/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// React API
import * as React from 'react'

// Types
import { Feature } from '../types/featureTypes'

interface Props {
  actions: any
  featureData: Feature.State
}

interface State {
  addSomebravePeople: Array<string>
}

export default class CoreFeature extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      addSomebravePeople: [ 'Ross', 'Anthony', 'Serg' ]
    }
  }

  onAddSomebravePeople = (item: string) => {
    this.props.actions.addItem(item)
  }

  clearStorage = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  render () {
    return (
      <div>
        <button onClick={this.clearStorage}>Clear localStorage</button>
        <h2>Brave People</h2>
        <ul>
          {
            this.state.addSomebravePeople.map((item: string, index: number) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={this.onAddSomebravePeople.bind(this, item)}>(+)</button>
                </li>
              )
            })
          }
        </ul>
        <h2>Amazing Brave people</h2>
        <ol>
          {
            this.props.featureData.bravePeople.map((item: string, index: number) => {
              return <li key={index}>{item}</li>
            })
          }
        </ol>
      </div>
    )
  }
}
