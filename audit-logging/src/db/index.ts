import { DataSource } from 'typeorm';
import { Trail } from '../models/trail';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'localdb',
  database: process.env.POSTGRES_DB || 'capstone',
  entities: [Trail],
  logging: true,
  synchronize: true,
});

export default dataSource;
