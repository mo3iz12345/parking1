import {createFactory } from 'hono/factory';
import { logger } from 'hono/logger';
import { html } from 'hono/html';

const factory = createFactory();
const middleware = factory.createMiddleware(async (c, next) => {
    c.set('foo', 'bar');
    await next()
});

const HelloController = factory.createHandlers(logger(), middleware, (c) => {
    return c.html(
        html`<!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">  
            <meta name="viewport" content="width=device-width,
            initial-scale=1.0">
            <h1> Welcome to EuroPark </h1>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
        </head>
        <body>
            <img src="/static/parking.png">
            <p>Save time and money with EuroPark! Enjoy 
            a 100% contactless parking experience for 
            a short or long duration in our car parks in Europe! </p>
            <span><a href="/cities">Our Cities</a></span><br/>
            <span><a href="/parkings">Our Car Parks</a></span>
        </body>
        </html>`
    )
  });

export default HelloController;
