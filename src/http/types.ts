export interface QueryType {
    q: string;
}

export interface RepositoriesType {
    id: number;
    nodeId: string;
    name: string;
    fullName: string;
    htmlUrl: string;
    description: string;
    owner: {
      avatarUrl: string
    }
    fork: false;
    url: string;
    forks_count: number;
    forks: number;
    watchers: number;
}

export interface IResponse<T> {
    items: T[];
    totalCount: number;
}

export type GetRepositories = (
    query: QueryType
) => Promise<IResponse<RepositoriesType>>;