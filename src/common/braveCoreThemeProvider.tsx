import * as React from 'react'
import { ThemeProvider } from 'brave-ui/theme'
import IBraveTheme from 'brave-ui/theme/theme-interface'

export type ThemeType = 'Dark' | 'Light' | 'System'

export type Props = {
  initialThemeType?: ThemeType
  dark: IBraveTheme,
  light: IBraveTheme
}
type State = {
  themeType?: ThemeType
}

function themeTypeToState (themeType: ThemeType): State {
  return {
    themeType
  }
}

// This code is a representation of the original BraveCoreThemeProvider
// for demo purposes only and not fully functional.
export default class BraveCoreThemeProvider extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    if (props.initialThemeType) {
      this.state = themeTypeToState(props.initialThemeType)
    }
  }

  render () {
    // Don't render until we have a theme
    if (!this.state.themeType) return null
    // Render provided dark or light theme
    const selectedShieldsTheme = this.state.themeType === 'Dark'
                ? this.props.dark
                : this.props.light
    return (
      <ThemeProvider theme={selectedShieldsTheme}>
        {React.Children.only(this.props.children)}
      </ThemeProvider>
    )
  }
}
