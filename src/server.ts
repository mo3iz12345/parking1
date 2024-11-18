import {Hono} from 'hono';

export function startServer(app:Hono){
    const server = Bun.serve({
        port: 3000,
        fetch(req){
            return app.fetch(req);
        }
    });
    
    console.log(`Listening on http://localhost:${server.port} ...`);
    
}
