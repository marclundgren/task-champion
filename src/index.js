/* eslint import/no-unresolved: 0 */
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import { ThemeProvider } from 'react-native-material-ui'

import Main from './components/Main'
import todoApp from './reducers'
import uiTheme from './theme-light'

const store = createStore(todoApp)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <Main />
        </ThemeProvider>
      </Provider>
    );
  }
}
