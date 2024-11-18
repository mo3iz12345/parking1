import {createFactory } from 'hono/factory';
import { logger } from 'hono/logger';
import { html } from 'hono/html';
import { generateCitiesView } from '../../views/city/ReadAllCitiesView';
import { cities } from '../../data/staticDatabase';

const factory = createFactory();
const middleware = factory.createMiddleware(async (c, next) => {
    c.set('foo', 'bar');
    await next()
});

const ReadAllCitiesController = factory.createHandlers(logger(), middleware, (c) => {
    const Html = generateCitiesView(cities);
    //return c.html(Html);
    return c.html(
        Html
    )
});

export default ReadAllCitiesController;