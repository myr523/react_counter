import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import App from './components/app.jsx'



// Go!
render(<App />, document.getElementById('app'))
console.log('start app');

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default
    render(NextApp)
  })
}
