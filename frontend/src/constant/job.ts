import { WorkingType } from '@/types/job';

export const JOB_TYPE = {
  ONSITE: WorkingType.AtOffice,
  REMOTE: WorkingType.Remote,
  HYBRID: WorkingType.Hybrid,
};

export const JOB_TYPE_TEXT = {
  [JOB_TYPE.ONSITE]: 'onsiteText',
  [JOB_TYPE.REMOTE]: 'remoteText',
  [JOB_TYPE.HYBRID]: 'hybridText',
};
