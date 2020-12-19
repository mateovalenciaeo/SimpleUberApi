import { Driver } from '../models/driver.js';

export function getDriverController(req, res) {
    res.send({ hi: 'there' });
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
