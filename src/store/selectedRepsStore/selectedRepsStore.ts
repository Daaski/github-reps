import {makeAutoObservable} from "mobx";
import {RepositoriesType} from "http/types";
import {SelectedRepsType} from "store/selectedRepsStore/types";

class SelectedRepsStore implements SelectedRepsType{
    private _selectedReps: RepositoriesType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    get repositories () {
        return this._selectedReps
    }

    addRep(reps: RepositoriesType) {
        this._selectedReps.push(reps)
    }
}

export default new SelectedRepsStore()