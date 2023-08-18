import express from 'express';
import { IServer } from './interface';
import { PORT } from './config';

export class Server implements IServer {
    public app: any;

    private static instance: Server;
    
    private constructor(appInstance: any) {
        this.app = appInstance;
    }

    public static getInstance(appInstance: any) {
        if (!Server.instance) {
            Server.instance = new Server(appInstance);
        }

        return Server.instance;
    }

    public startServer() {
        const app = this.app.load();
        const server = app.listen(PORT, () => {
            console.log(server.address());
            console.log(`Server litening on http://${server.address().address}:${server.address().port}`);
        });
    }
}
