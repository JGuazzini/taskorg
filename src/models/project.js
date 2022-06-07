import { DataTypes } from "sequelize"
import { sequelize } from "../db/db.js"
import { Task } from "./task.js"



export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
});

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
});