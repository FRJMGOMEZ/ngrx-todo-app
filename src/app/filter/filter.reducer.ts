import { createReducer, on} from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';
export const initialState:validFilters = "todos" ;

const _filterReducer = createReducer(
initialState,
 on(setFilter, (state,{filter}) => filter as any),
);
export const filterReducer = (state, action) => {
 return _filterReducer(state, action);
}