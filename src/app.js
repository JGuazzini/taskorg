import express from "express";
import projectsRoutes from "./routes/projects.js";
import tasksRoutes from "./routes/tasks.js";

const app = express();

//middlewares
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;