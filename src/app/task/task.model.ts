import { Label } from "../label/label.model"
import { Project } from "../projectTask/project.model"
export interface Task {
    _id?: string,
    title: string,
    dateCreation?: Date,
    description?: string,
    completed?: boolean
    priority?: number,
    dueDate? : Date,
    duration? : number,
    order?: number
    project?: Project,
    label?: Label[]
    projectId?: Project
}

// on utilise une interface et non une classe ici car on n'a besion 
//uniquement que les tâches respectent cette structure
//mais les taches n'ont pas besoin de logique de comportement
//dans une interface on peut déclarer des fonctions mais pas les impémenter