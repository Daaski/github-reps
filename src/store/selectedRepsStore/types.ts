import {RepositoriesType} from "http/types";

export interface SelectedRepsType {
    repositories: RepositoriesType[]
    addRep: (rep: RepositoriesType) => void
}