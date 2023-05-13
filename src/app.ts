import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// application routes
import userRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors());

// parse json data
app.use(express.json());
// parse url encoded data
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
