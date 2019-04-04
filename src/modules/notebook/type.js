// @flow

export type TCatalog = {| /* строгое объявление без дополнительных [string]: mixed */
    birthday: string,
    group: string,
    id: string,
    name: string,
    phone: string,
    select?: boolean,
|};

export type TNoteBookState = {
    data: Array<TCatalog>, /* or TCatalog[] упрощенный вид */
    error: Object,
    filter: TCatalog[],
    isLoading: boolean,
};
