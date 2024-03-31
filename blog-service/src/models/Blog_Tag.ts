import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../db/db';
import { Tag } from './Tag';

export type IBlogTag = {
    blog_id: string;
    tag_id: string;
};
export class BlogTagModel extends Model {
    public blog_id!: string;
    public tag_id!: string;
}
BlogTagModel.init(
    {
        blog_id: { type: DataTypes.STRING, primaryKey: true },
        tag_id: { type: DataTypes.STRING, primaryKey: true },
    },
    {
        sequelize,
        tableName: 'blog_tag',
        timestamps: false
    },
);
BlogTagModel.belongsTo(Tag, { foreignKey: 'tag_id', as: 'tag' });
Tag.hasMany(BlogTagModel, { foreignKey: 'tag_id' });





