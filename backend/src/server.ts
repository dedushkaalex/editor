import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import { appRouter } from './trpc';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

app.listen(3000, () => {
  console.info("Server started http://localhost:3000");
});