import express from "express";
import projectsRoutes from "./routes/projects.js"

const app = express();

//middlewares
app.use(express.json());

app.use(projectsRoutes);

export default app;