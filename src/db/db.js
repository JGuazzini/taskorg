import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('taskorg', 'ignacio', 'ignis', {
    host: 'localhost',
    dialect: 'postgres'

})