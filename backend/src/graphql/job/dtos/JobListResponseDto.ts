import { company, job } from "@prisma/client";

export type JobListResponseDto = job & { company: company };
