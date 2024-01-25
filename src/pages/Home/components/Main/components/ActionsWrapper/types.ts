import React from "react";
import {RepositoriesType} from "http/types";

export interface ActionsWrapperProps {
    setRepsData: React.Dispatch<React.SetStateAction<RepositoriesType[]>>
}

export interface CopyComponentProps {
    copyValue: string
}