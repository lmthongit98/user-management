import { User } from "src/app/_models/user";

export class Project{
  id!: string;
  projectName!: string;
  description!: string;
  categoryId!: string;
  creator!  : User;
  members!: User[];
}
