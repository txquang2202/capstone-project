import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db/db';

export interface IBlog {
    id?: string;
    slug: string;
    user_id?: string | null;
    title: string;
    content: string;
    time_read?: number | 0;
    created_at: Date;
};

export class Blog extends Model {
    public id!: string;
    public title!: string;
    public content!: string;
    public time_read!: number;
    public created_at!: Date;
    public slug!: string;
    public user_id!: string;
}

Blog.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING },
        content: { type: DataTypes.TEXT },
        time_read: { type: DataTypes.INTEGER },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        slug: { type: DataTypes.STRING, unique: true },
        user_id: { type: DataTypes.STRING }
    },
    {
        sequelize,
        tableName: 'blog', // Assuming your table name is "blogs" in the database
        timestamps: false
    }
);

// Define associations
// Blog.hasMany(BlogTag, { foreignKey: 'blog_id', as: 'blog_tags' });
// BlogTag.belongsTo(Blog, { foreignKey: 'id', as: 'blog' });
