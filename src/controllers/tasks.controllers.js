import { Task } from "../models/task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);

    } catch (error) {
        res.status(500).json({ mesagge: error.mesagge });
    }
};

export const createTask = async (req,res) => {
    try {
        const { name, done, projectId } = req.body;

        const newTask = await Task.create({
            name,
            done,
            projectId
        })

        res.json(newTask)
    } catch (error) {
        res.status(500).json({ mesagge: error.message });
    }
};

export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: { id }
        })
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.mesagge })
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result =await Task.destroy({
            where: { id }
        })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ mesagge: error.mesagge })
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: { id }
        })
        task.set(req.body)
        await task.save();
        res.json(task);

    } catch (error) {
        res.status(500).json({ mesagge: error.mesagge });
    }
};