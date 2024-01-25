import React from "react";
import { useParams } from 'react-router';

import { RepositoriesType } from 'http/types';

import ForkSvg from 'assets/svg/fork.svg?react';
import StarSvg from 'assets/svg/star.svg?react';

import scss from './RepositoryPage.module.scss';

import SelectedRepsStore from 'store/selectedRepsStore/selectedRepsStore';
import {Link} from "react-router-dom";


export const RepositoryPage = () => {
    const params = useParams();

    const id = params.id as string;

    const elem =  SelectedRepsStore.repositories.find(
        (el) => el.id === +id
    )

    const { name, fullName, description, forks, watchers } = SelectedRepsStore.repositories.find(
        (el) => el.id === +id
    ) as RepositoriesType;
    return (
        <div className={scss.page_wrapper}>
            <Link className={scss.link} to='/'>Назад</Link>
            <div className={scss.rep_wrapper}>
                <h2>{name}</h2>
                <div>
                    <div>
                        <StarSvg/>
                        {watchers}
                    </div>
                    <div>
                        <ForkSvg/> {forks}
                    </div>
                </div>
                <p>{fullName}</p>
                <span>{description}</span>
            </div>
        </div>
    );
};
