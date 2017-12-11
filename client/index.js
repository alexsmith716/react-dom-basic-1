
 import React from 'react';
import { render } from 'react-dom';
import App from '../shared/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'whatwg-fetch';

render((

    <Router>
      <App gists={window.__data__} />
    </Router>

), document.getElementById('app'));


/*
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import data from '../data/gists'


window.React = React

render(

  <App gists={data} />,
  document.getElementById('app')

)
*/