export interface Project {
    id: string;
    name: string;
    description?: string;
    taskIds: string[]; // références aux ID des tâches
    archive?: true
}
