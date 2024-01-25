import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import {RepsListItem} from "pages/Home/components/Main/components/RepsList/RepsListItem";

import {RepsListProps} from "pages/Home/components/Main/components/RepsList/types";

import scss from './RepsList.module.scss';

import SelectedRepsStore from 'store/selectedRepsStore/selectedRepsStore';


export const RepsList: React.FC<RepsListProps> = observer(
    ({ type, title, listItems, filterItems }) => {

        const currentItems = useMemo(() => {
            return type === 'default'
                ? listItems
                : SelectedRepsStore.repositories;
        }, [listItems, type]);

        const handleClick = (id: number) => {
            if (type === 'selected') return

            const selectedReps = SelectedRepsStore.repositories;

            if (selectedReps.some(el => el.id === id)) {
                return
            }

            const newRep = listItems?.find(
                (el) => el.id === id
            ) as (typeof selectedReps)[0];

            SelectedRepsStore.addRep(newRep);
            if (filterItems) {
                filterItems(id);
            }
        };

        return (
            <div className={scss.repositories_list}>
                <h2>{title}</h2>
                <ul className={scss.repositories}>
                    {currentItems?.map((el, index) => (
                        <RepsListItem
                            handleClick={handleClick}
                            key={index}
                            {...el}
                            type={type}
                        />
                    ))}
                </ul>
            </div>
        );
    }
);
