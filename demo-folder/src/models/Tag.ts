import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../db/db';

export class Tag extends Model {
  public id!: number;
  public tag_name!: string;
}
Tag.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        tag_name: { type: DataTypes.STRING },
    },
    {
        sequelize,
        tableName: 'tag',
    },
    );
