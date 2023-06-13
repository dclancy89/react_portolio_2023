import { Entry, EntryCollection } from "contentful";
import { IProject } from "../../contentfulTypesCustom";
import { Project } from "../types/Project";

export function buildEntriesData(projects: Entry[]): Project[] {
  const filteredProjects: Project[] = [];
  projects.forEach((entry: Entry) => {
    const p: Project = {
      title: entry.fields.title as string,
      description: entry.fields.description as string,
      technologies: entry.fields.technologies as string[],
      features: entry.fields.features as string[],
      notes: entry.fields.notes as string[],
      orderNumber: entry.fields.orderNumber as number,
    };
    filteredProjects.push(p);
  });
  return filteredProjects.sort((a, b) => {
    return a.orderNumber - b.orderNumber;
  });
}
