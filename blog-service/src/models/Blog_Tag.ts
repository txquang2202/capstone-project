import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../db/db';
import { Tag } from './Tag';

export interface IBlogTag {
    blog_id: string;
    tag_id: string;
    tag?: {
        tag_name: string;
    };
};
export class BlogTag extends Model {
    public blog_id!: string;
    public tag_id!: string;
}
BlogTag.init(
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
BlogTag.belongsTo(Tag, { foreignKey: 'tag_id', as: 'tag' });
Tag.hasMany(BlogTag, { foreignKey: 'tag_id' });