import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../db/db';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public gender!: string;
  public dob!: string;
  public current_address!: string;
  public about_me!: string;
  public cover_letter!: string;
  public personal_link!: string;
  public role!: number;
  public password!: string;
  public img_url!: string;
  

}