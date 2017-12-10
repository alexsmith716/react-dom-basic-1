import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = new express();
app.use(morgan('dev'));

// app.use(bodyParser.json());
// app.use('/public', express.static(path.join(__dirname, './public')));
// app.use(favicon(path.join(__dirname, '../public/static/favicon', 'favicon.ico')));
// app.use(cors());


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



app.listen(process.env.PORT, error => {
  if (!error) {
    console.log(`Running on port ${process.env.PORT}`);
  }
});

export default app;



