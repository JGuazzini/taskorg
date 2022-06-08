import { Project } from '../models/project.js'
import { Task } from '../models/task.js'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        res.status(500).json({message: error.message })
    }

}

export const createProject = async (req, res) => {
    const {name, priority, description} = req.body

    try {
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        

        if(!project) res.status(404).json({ message: "Project does not exist" });
        res.json(newProject)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {

    try {
        const { id }  = req.params;
        const { name, priority, description } = req.body;

        const project = await Project.findByPk(id);
        project.name = name;
        project.priodity = priority;
        project.description = description;
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const deleteProject = async (req, res) => {
    try {
        const { id }  = req.params;
        await Project.destroy({
            where: {
                id,
            },
        });
        res.senStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getProjectTasks = async (req, res) => {
    const { id } =req.params;
     try {
        const tasks = await Task.findAll({
            where: { projectId: id },
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}