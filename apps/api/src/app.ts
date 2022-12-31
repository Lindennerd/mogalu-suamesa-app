import cors from "cors";
import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import { serve, setup } from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import swagger from "../build/swagger.json";

export const app = () => {
  dotenv.config();

  const app = express();
  app.use(cors({ origin: "http://localhost:3000" }));

  app.use(urlencoded({ extended: true }));
  app.use(json());

  RegisterRoutes(app);

  app.use(
    ["/openapi", "/docs", "/swagger"],
    serve,
    setup(swagger, { explorer: true })
  );

  return app;
};
