import {RepositoriesType} from "http/types";

type RepType = 'selected' | 'default'

export interface RepsListProps {
    type: RepType
    listItems?: RepositoriesType[]
    title: string
    filterItems?: (id: number) => void
}

export interface RepItemProps extends RepositoriesType {
    type: RepType
    handleClick: (id: number) => void
}