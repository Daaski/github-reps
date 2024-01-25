import { type GetRepositories } from 'http/types';
import { $host } from 'http/index';
import { setQueryParams } from 'utils/setSearchParams';
import {AxiosResponse} from "axios";

export const getRepositories: GetRepositories = async ({ q }) => {
    const params = setQueryParams({ q });

    const reps: AxiosResponse<ReturnType<typeof getRepositories>> = await $host.get('search/repositories', {
            params
    });

    return reps.data
};
