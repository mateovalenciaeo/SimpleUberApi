import {
    getDriverController,
    createDriverController,
    updateDriverController,
    deleteDriverController,
} from '../controllers/driverController.js';

function routes(app) {
    app.get('/api', getDriverController);
    app.post('/api/drivers', createDriverController);
    app.put('/api/drivers/:id', updateDriverController);
    app.delete('/api/drivers/:id', deleteDriverController);
}

export { routes as driverRoute };
