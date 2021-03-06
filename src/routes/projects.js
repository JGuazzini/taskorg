import { Router } from "express";
import { createProject, deleteProject, getProjects, getProjectTasks, updateProject } from "../controllers/projects.controllers.js"
const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id");

router.get("/projects/:id/tasks", getProjectTasks);

export default router;