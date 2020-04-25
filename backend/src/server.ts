import "reflect-metadata";
import dotenv from "dotenv";
import App from "./app";

dotenv.config();

process.on("uncaughtException", (err: any) => {
  console.error(`
  --------------------
  Unhandled Exception:
  ${err.message}
  --------------------
  `);
});

process.on("unhandledRejection", (err: any) => {
  console.error(`
  --------------------
  Unhandled Rejection:
  ${err.message}
  --------------------
  `);
});

module.exports = new App().start();
