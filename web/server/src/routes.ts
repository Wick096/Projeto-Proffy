import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/connectionsController';


const routes = express.Router();
const classesController = new ClassController();
const connectionsController = new ConnectionsController();





routes.get('/classes', classesController.index );
routes.post('/classes', classesController.create );

routes.get('/connections',connectionsController.index);
routes.post('/connections',connectionsController.create);

export default routes;