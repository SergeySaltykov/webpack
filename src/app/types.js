export type TCatalog = {
    birthday: string,
    group: string,
    id: string,
    name: string,
    phone: string,
    select?: boolean,
};

export type tState = {
    data: Array<TCatalog>,
    error: Object,
    filter: Array<TCatalog>,
    isLoading: boolean,
};

export type tAction = {

};
