import { Timestamp } from "rxjs"

export interface Task {
    id: number,
    nom: string,
    dateCreation: Date,
    priority: number,
    dueDate : Date,
    duration : number,
    description: string
}