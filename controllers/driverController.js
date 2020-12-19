import { Driver } from '../models/driver.js';

export function dummyController(req, res, next) {
    res.send({ hi: 'there' });
}

export function getDriverController(req, res, next) {
    const { lng, lat } = req.query;
    Driver.aggregate([
        {
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [parseFloat(lng), parseFloat(lat)],
                },
                maxDistance: 200000,
                spherical: true,
                distanceField: 'dist.calculated',
            },
        },
    ])
        .then((drivers) => res.send(drivers))
        .catch(next);
}

export function createDriverController(req, res, next) {
    const driverProps = req.body;
    Driver.create(driverProps)
        .then((driver) => res.send(driver))
        .catch(next);
}

export function updateDriverController(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;
    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
        .then(() => Driver.findById({ _id: driverId }))
        .then((driver) => res.send(driver))
        .catch(next);
}

export function deleteDriverController(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;
    Driver.findByIdAndRemove({ _id: driverId })
        .then((driver) => res.status(204).send(driver))
        .catch(next);
}
