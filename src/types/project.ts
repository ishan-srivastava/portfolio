import type { Tech, TechName } from "./tech"

export interface Project {
  title: string;
  desciptions: string;
  techList?: TechName[];
  link: string;
  banner? : string;
}
