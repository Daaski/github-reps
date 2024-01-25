import React, { ChangeEvent, useState } from 'react';

import { Input } from 'UI/Input';

import { useThrottledFunction } from 'hooks/useThrottledFunction';
import { getRepositories } from 'http/repositoriesService';

import { ActionsWrapperProps } from 'pages/Home/components/Main/components/ActionsWrapper/types';

import scss from './ActionsWrapper.module.scss'
import {CopyComponent} from "pages/Home/components/Main/components/ActionsWrapper/CopyComponent";

export const ActionsWrapper: React.FC<ActionsWrapperProps> = ({
    setRepsData,
}) => {
    const [searchValue, setSearchValue] = useState('');

    const throttledTest = useThrottledFunction(handleTest, 500);

    async function handleTest(value: string) {
        const reps = await getRepositories({ q: value });
        setRepsData(reps.items);
    }

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        throttledTest(e.target.value);
    };

    return (
        <div className={scss.actions_wrapper}>
            <Input
                needErrorLabel={false}
                value={searchValue}
                name="search"
                onChange={handleChange}
            />
            <CopyComponent copyValue={searchValue}/>
        </div>
    );
};
