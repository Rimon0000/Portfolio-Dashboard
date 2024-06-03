/* eslint-disable @typescript-eslint/no-explicit-any */
export type TProjectItem = {
    data: any;
    _id: string;
    image: string;
    title: string;
    live: string;
    client: number;
    server: number;
    technology: number;
    description: string
    features: string
  }

  export type TSkillItem = {
    data: any;
    _id: string;
    icon: string;
    title: string;
    progress: number;
  }