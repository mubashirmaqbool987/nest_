import { Sequelize } from 'sequelize-typescript';
import { User } from './../models/user.model';
import { sequelize } from "./sequelize.config";
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'root',
                password: 'root',
                database: 'testdb',
                logging:false,
                dialectOptions: {
                    options: {
                        instanceName: 'SQLEXPRESS',
                        // trustServerCertificate: false
                    },
                }
            });
            sequelize.addModels([User]);
            sequelize.authenticate().then(msg => console.log('db connected'));
            return sequelize;
        },
    },
];