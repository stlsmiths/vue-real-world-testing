import { rest } from "msw";
import {events as mockEvents} from './test-db.json'

export const handlers = [
  rest.get("/events", (req, res, ctx) => {
    const data = [ ...mockEvents];
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get("/event", (req, res, ctx) => {
    const data = mockEvents[0]; //{ message: "Hello from Vue Mastery!" };
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get("/nothing", (req,res,ctx) => {
    return res(
      ctx.status(403),
      // And a response body, if necessary
      ctx.json({
        errorMessage: `Path /nothing not found`
      })
    );
  })

];
