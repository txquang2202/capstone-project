import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../db/db';
import { Tag } from './Tag';

export class BlogTag extends Model {
  public blog_id!: number;
  public tag_id!: number;
}
BlogTag.init(
    {
        blog_id: { type: DataTypes.INTEGER, primaryKey: true },
        tag_id: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
        sequelize,
        tableName: 'blog_tag',
        timestamps: false
    },
);
BlogTag.belongsTo(Tag, { foreignKey: 'tag_id', as: 'tag' });
Tag.hasMany(BlogTag, { foreignKey: 'tag_id' });





