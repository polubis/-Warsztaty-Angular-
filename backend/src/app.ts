import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { chatController } from "./controllers";

import { parseFailure } from "./utils";

export default class App {
  private init() {
    const app: Application = express();

    app.set("port", process.env.PORT || 8080);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(
      cors({
        origin: process.env.origin || "http://localhost:4200",
      })
    );

    app.use("/api/chat", chatController);

    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      parseFailure(error, res);
    });

    return app;
  }

  public async start() {
    const app = this.init();
    const server = app.listen(app.get("port"), async () => {
      console.log(
        `Service running at port ${app.get("port")} in ${app.get("env")} mode`
      );
      console.log("Date: ", new Date().toDateString());
    });
    return Promise.resolve(server);
  }
}
