import { useState } from 'react';

import {RepsList} from "pages/Home/components/Main/components/RepsList";


import {RepositoriesType} from "http/types";


import scss from './Main.module.scss';
import {ActionsWrapper} from "pages/Home/components/Main/components/ActionsWrapper";




export const Main = () => {
    const [repsList, setRepsList] = useState<RepositoriesType[]>([]);

    const filterItems = (id: number) => {
        setRepsList(prev => prev.filter(el => el.id !== id))
    }

    return (
        <>
            <main className={scss.main_wrapper}>
                <h1 className={scss.main_title}>Поиск репозиториев!</h1>
                <ActionsWrapper setRepsData={setRepsList}/>

                <section>
                    <RepsList title='Список репозиториев' filterItems={filterItems} listItems={repsList}
                              type='default'/>
                    <RepsList title='Список c избранными репозиториями'  type='selected'/>
                </section>
            </main>
        </>
    );
};
