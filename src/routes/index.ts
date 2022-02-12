import express from 'express';
import images from './api/images';

// Create root route object
const routes = express.Router();

// set the root endpoint
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Welcome to Image processing API');
});

// setting the path to images route as a middleware
routes.use('/images', images);

export default routes;
