import { SetupWorker, setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);
