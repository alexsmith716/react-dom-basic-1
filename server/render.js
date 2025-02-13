import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderObject, data) => `<!DOCTYPE html>

<html lang="en-US">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible' content='IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="React Render Gists">
    <link href="data:image/x-icon;" type="image/x-icon" rel="shortcut icon">
    <intercept-url pattern="/favicon.ico" access="ROLE_ANONYMOUS"></intercept-url>
    <title>React Render Gists</title>
  </head>

  <body>

    <div id="app">${renderToString(renderObject)}</div>

      ${data ? `
        <script>window.__data__ = ${JSON.stringify(data)};</script>
        <script src="/static/vendor.bundle.js">
        <script src="/static/clientBundle.js"></script>
        ` : ''}

  </body>
</html>`;