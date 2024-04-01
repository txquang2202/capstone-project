import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Trail {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  actor!: string;

  @Column()
  event!: string;

  // targets
  @Column({ nullable: true })
  target_id?: string;

  @Column({ nullable: true })
  target_type?: string;

  @CreateDateColumn()
  created_at!: Date;
}
