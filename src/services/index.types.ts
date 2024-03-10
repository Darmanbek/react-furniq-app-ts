
export type TResponse<T> = {
    data: T[];
    links?: TLinks;
    meta: TMeta;
};

export type TLinks = {
    first: string;
    last: string;
    prev: null;
    next: null;
};

export type TMeta = {
    current_page: number;
    from: number;
    last_page: number;
    links: TInnerLinks[];
    path: string;
    per_page: number;
    to: number;
    total: number;
};

export type TInnerLinks = {
    url: null;
    label: string;
    active: boolean;
};
