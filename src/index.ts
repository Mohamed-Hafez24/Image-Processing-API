import express from 'express';
import routes from './routes/index';

// create application object
const app = express();

// process.env.PORT if we are running in production || if we run locally
// const port = process.env.PORT || 3000;
const port = 3000;

// setting the root path to the root route as a middleware
app.use('/api', routes);

// listen to the server
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
