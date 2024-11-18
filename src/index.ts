import { Hono } from "hono";
import HomeController from "./controllers/HomeController";
import { serveStatic } from 'hono/bun';
import { startServer } from "./server";
import ReadAllCitiesController from "./controllers/parking/ReadAllCitiesController";

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }));
app.get("/", ...HomeController);
app.get("/cities", ...ReadAllCitiesController);

startServer(app);





