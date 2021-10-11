import { createAction, props } from "@ngrx/store";

export const createTodo = createAction('[Todo Component] Create TODO',props<{text:string}>());
export const toggleTodo = createAction('[Todo Component] Toggle TODO',props<{id:number}>());
export const editTodo = createAction('[Todo Component] Edit TODO',props<{id:number,text:string}>());
export const deleteTodo = createAction('[Todo Component] Delete TODO',props<{id:number}>());
export const toggleAll = createAction('[Todo Component] Toggle all',props<{completed:boolean}>());
export const clearCompleted = createAction('[Todo Component] Clear TODO`s completed');