
import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table(
    {
        tableName: 'User'
    }
)
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;
}