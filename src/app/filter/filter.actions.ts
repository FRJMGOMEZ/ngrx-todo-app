
import { createAction,props } from "@ngrx/store";

export type validFilters = 'completed' | 'pending' | 'todos'

export const setFilter = createAction('[Filter] Set filter',props<{filter:validFilters}>())