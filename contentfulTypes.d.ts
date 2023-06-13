import { Entry, Asset } from 'contentful'
export const Project = 'project'
export interface Project {
  //Project
  /*  */
  readonly description: string
  readonly features: ReadonlyArray<string>
  readonly notes?: ReadonlyArray<string>
  readonly orderNumber: number
  readonly technologies?: ReadonlyArray<string>
  readonly title: string
}

