import {CUSTOMERS} from '../shared/customers';
import {INFOS} from '../shared/infos';
import {HELPS} from '../shared/helps';
import {FINANCES} from '../shared/finances';

export const initialState = {
    customers: CUSTOMERS,
    infos: INFOS,
    helps: HELPS,
    finances: FINANCES
};

export const Reducer = (state = initialState, action) => {
    return state;
};