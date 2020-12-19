import assert from 'assert';
import request from 'supertest';
import { app } from '../../app.js';
import mongoose from 'mongoose';

const Driver = mongoose.model('driver');

describe('The express app', () => {
    it('Post to /api/drivers creates a new driver', (done) => {
        Driver.count().then((count) => {
            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' })
                .end((err, response) => {
                    Driver.count().then((newCount) => {
                        assert(count + 1 === newCount);
                        done();
                    });
                });
        });
    });
});
