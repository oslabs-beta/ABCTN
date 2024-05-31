import 'express';
import { Request, Response, NextFunction } from 'express';
// declare module 'express' {
//   export interface Response {
//     locals: { instances?: SanitizedInstances[]; metrics?: Results };
//   }
// }

export interface AWSController {
  getEC2Instances: (req: Request, res: Response, next: NextFunction) => void;
  getMetricStatistics: (req: Request, res: Response, next: NextFunction) => void;
}

export interface SanitizedInstances {
  InstanceId: string;
  InstanceType: string;
  Name: string;
  State: string;
}

export type Results = Record<
  string,
  {
    name: string;
    metric: string;
    unit: string;
    datapoints: { Timestamp: Date; Value: number }[];
  }[]
>;

export interface Datapoints {
  Timestamp: Date;
  Value: number;
}

export interface CustomResponse extends Response {
  locals: {
    instances: SanitizedInstances[];
  };
}
