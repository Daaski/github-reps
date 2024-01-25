export const setQueryParams = (
    queryParams: {[key: string]: string}
) => {
    const urlQuery = new URLSearchParams();

    for (const [key, value] of Object.entries(queryParams)) {
        urlQuery.append(key, value)
    }


    return urlQuery;
};
