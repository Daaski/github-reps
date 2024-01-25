import axios from 'axios';
import { snakeToCamelCaseDeep } from 'utils/snakeToCamelCaseDeep';

export const $host = axios.create({
    baseURL: 'https://api.github.com/',
});

$host.interceptors.response.use((res) => {
    if (res.data) snakeToCamelCaseDeep(res.data);
    return res;
});
