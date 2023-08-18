import express from 'express';
// import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Server } from './server';
import * as routes from './controllers';

class Application {
    public app: express.Application;
    public config: any;

    constructor(config: any) {
        this.app = express();
        this.config = config;
    }

    private initRoutes(): void {
        routes.load(this.app);
    }

    private loadMiddlewares(): void {
        this.app.use(bodyParser.json());
    }

    private handleError(err: Error): void {
        console.log('Error:', err.stack);
    }

    private async loadClients(): Promise<void> {
        try {
            // load mongo client
        } catch (err: any) {
            console.error('Error:', err.stack);
            process.exit(1);
        }
    }

    public load() {
        this.loadMiddlewares();
        this.initRoutes();
        this.app.use('/', this.handleError);

        return this.app;
    }
}

const application = new Application(null);
const server = Server.getInstance(application);
server.startServer();
