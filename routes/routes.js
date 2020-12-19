import {
    getDriverController,
    createDriverController,
} from '../controllers/driverController.js';

function routes(app) {
    app.get('/api', getDriverController);
    app.post('/api/drivers', createDriverController);
}

export { routes as driverRoute };
