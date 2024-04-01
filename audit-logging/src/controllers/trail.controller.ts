import { DataSource } from 'typeorm';
import { Trail } from '../models/trail';

interface createTrailReq {
  actor: string;
  event: string;
  targetId: string;
  targetType: string;
}

export const createTrail = async (
  db: DataSource,
  req: createTrailReq
): Promise<Trail> => {
  const trailRepository = db.getRepository(Trail);
  const trail = new Trail();
  trail.actor = req.actor;
  trail.event = req.event;
  trail.target_id = req.targetId;
  trail.target_type = req.targetType;
  return trailRepository.save(trail);
};

export const listTrails = async (db: DataSource): Promise<Trail[]> => {
  const trailRepository = db.getRepository(Trail);
  return trailRepository.find();
};
