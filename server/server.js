import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import favicon from 'serve-favicon';
import morgan from 'morgan';
// import config from '../webpack/webpack.config.dev.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import render from './render';
import data from '../data/gists';
import nodefetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = new express();

import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router-dom';

import App from '../client/components/App';

app.use('/public', express.static(path.join(__dirname, './public')));
app.use(favicon(path.join(__dirname, '../public/static/favicon', 'favicon.ico')));


app.use(morgan('dev'));
app.use(bodyParser.json());


app.use((req, res, next) => {
  console.log('>>>>>>>>>>> GOING THROUGH APP NOW <<<<<<<<<<<<<');
  console.log('REQ.method +++++: ', req.method);
  console.log('REQ.url ++++++++: ', req.url);
  console.log('REQ.headers ++++: ', req.headers);
  if(req.user) {
    console.log('REQ.user +++++: ', req.user);
    console.log('REQ.user._id++: ', req.user._id);
  } else {
    console.log('REQ.user +++++: NO USER');
  };
  console.log('<<<<<<<<<<< GOING THROUGH APP NOW >>>>>>>>>>>>>');
  // authorization: 'Bearer eyJhbGciOgiJIU',
  next();
});


app.get('*', (req, res) => {

  nodefetch('https://api.github.com/users/alexsmith716/gists')
  // nodefetch('https://api.github.com/gists')

    .then(response => response.json())

    .then(data => {

      // res.status(200);
      // res.json(data);

      res.status(200).send(render(
        (
          <Router context={{}} location={req.url}>
            <App data={data} />
          </Router>
        ), data
      ));

    }).catch(err => {

      console.log('Fetch catch err: ', err)
      //res.status(500).send(render(<Error />));

    });

});


app.listen(process.env.PORT, error => {
  if (!error) {
    console.log(`Running on port ${process.env.PORT}`);
  }
});

export default app;



