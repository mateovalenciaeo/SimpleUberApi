import { Driver } from '../models/driver.js';

export function getDriverController(req, res) {
    res.send({ hi: 'there' });
}

export function createDriverController(req, res) {
    const driverProps = req.body;
    Driver.create(driverProps).then((driver) => res.send(driver));
}
