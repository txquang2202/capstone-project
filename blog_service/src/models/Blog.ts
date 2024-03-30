import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db/db';
import { User } from './User';
import { BlogTag } from './Blog_Tag';

export class Blog extends Model {
    public id!: number;
    public title!: string;
    public content!: string;
    public time_read!: string;
    public created_at!: Date;
    public slug!: string;
    public user_id!: number;
}

Blog.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING },
        content: { type: DataTypes.TEXT },
        time_read: { type: DataTypes.STRING },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        slug: { type: DataTypes.STRING },
        user_id: { type: DataTypes.INTEGER }
    },
    {
        sequelize,
        tableName: 'blog' , // Assuming your table name is "blogs" in the database
        timestamps: false
    }
);

// Define associations
// Blog.hasMany(BlogTag, { foreignKey: 'blog_id', as: 'blog_tags' });
// BlogTag.belongsTo(Blog, { foreignKey: 'id', as: 'blog' });
