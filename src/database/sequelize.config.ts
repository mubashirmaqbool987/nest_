import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 1433,
    username: 'root',
    password: 'root',
    database: 'testdb',
    dialectOptions: {
        options: {
            instanceName: 'SQLEXPRESS',
            // trustServerCertificate: false
        },
    }
});