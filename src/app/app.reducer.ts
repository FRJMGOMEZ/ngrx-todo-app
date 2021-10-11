import { ActionReducerMap } from "@ngrx/store";
import { validFilters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todo/models/todo.model";
import { todosReducer } from "./todo/todo.reducer";

export interface AppState{
    todos:Todo[]
    filter:validFilters
};


export const appReducers:ActionReducerMap<AppState> = {
    todos:todosReducer,
    filter:filterReducer
}