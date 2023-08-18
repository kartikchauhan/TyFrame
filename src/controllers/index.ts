import express from 'express';
import { bookController } from './bookController';
import { API_VERSION } from '../config';

function loadRoutes(app: express.Application) {
    const router = express.Router();
    bookController(router);

    app.get('/api', function(req: express.Request, res: express.Response) {
        res.json({
            'api_version': API_VERSION,
        });
    })

    app.use(`/api/${API_VERSION}`, router);
};

export {loadRoutes as load };