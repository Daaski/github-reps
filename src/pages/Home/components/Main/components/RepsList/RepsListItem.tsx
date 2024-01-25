import React from 'react';
import { Link } from 'react-router-dom';

import ForkSvg from 'assets/svg/fork.svg?react';
import StarSvg from 'assets/svg/star.svg?react';

import { RepItemProps } from 'pages/Home/components/Main/components/RepsList/types';

import scss from './RepsList.module.scss';

export const RepsListItem: React.FC<RepItemProps> = ({
    id,
    name,
    type,
    url,
    fork,
    forks,
    forks_count,
    fullName,
    htmlUrl,
    description,
    nodeId,
    owner,
    watchers,
    handleClick,
}) => {
    return (
        <li onClick={() => handleClick(id)} className={scss.list_item}>
            <img
                src={owner.avatarUrl}
                width={50}
                height={50}
                alt="rep avatar"
            />
            <div>
                <div>
                    <StarSvg />
                    {watchers}
                </div>
                <div>
                    <ForkSvg /> {forks}
                </div>
            </div>
            {type === 'selected' ? (
                <Link className={scss.link} to={`repositories/${id}`}>{name}</Link>
            ) : (
                <p>{name}</p>
            )}
        </li>
    );
};
