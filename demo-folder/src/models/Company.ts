import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db";

export class Company extends Model {
  public id!: number;
  public company_name!: string;
  public company_type!: string;
  public country!: string;
  public ot_policy!: string;
  public working_day!: string;
  public company_size!: string;
  public overview!: string;
  public brief_overview!: string;
  public company_website!: string;
  public company_facebook!: string;
}

Company.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company_name: { type: DataTypes.STRING },
    company_type: { type: DataTypes.STRING },
    country: { type: DataTypes.TEXT },
    ot_policy: { type: DataTypes.STRING },
    working_day: { type: DataTypes.STRING },
    company_size: { type: DataTypes.STRING },
    overview: { type: DataTypes.STRING },
    brief_overview: { type: DataTypes.STRING },
    company_website: { type: DataTypes.STRING },
    company_facebook: { type: DataTypes.STRING },
  },
  {
    sequelize,
    tableName: "company",
  }
);

Company.sync();

console.log({ Company });

// Course.hasMany(Lesson, { foreignKey: "courseId", as: "lessons" });
// Lesson.belongsTo(Course, { foreignKey: "courseId", as: "course" });
