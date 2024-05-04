import { Progression } from './enums';

export interface Course {
  code: string;
  coursename: string;
  progression: Progression;
}
