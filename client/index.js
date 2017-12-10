import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import data from '../data/gists'


window.React = React


render(

  <App gists={data} />,
  document.getElementById('app')

)