

import { createReducer, on} from '@ngrx/store'
import { Todo } from './models/todo.model';
import * as actions from './todo-actions';
export const todos:Todo[] = [new Todo('save world')];
const _todosReducer = createReducer(
todos,
 on(actions.createTodo, (state,{text}) =>[...state,new Todo(text)]),
 on(actions.toggleTodo, (state,{id}) => { return state.map((todo:Todo)=>{ 
     if(todo.id === id){
     return {
    ...todo,
    completed: !todo.completed
     }}
     return todo
    })}),
on(actions.editTodo, (state, { id, text }) => { return state.map((todo: Todo) => {
     if(todo.id === id){
     return {
    ...todo,
    text: text
    }}
    return todo
   })}),
on(actions.deleteTodo,(state,{id})=>state.filter((todo:Todo)=>todo.id !== id)),
on(actions.toggleAll, (state,{completed})=>  state.map((todo:Todo)=>{  return {...todo,completed:completed}})),
on(actions.clearCompleted,state => {state = state.filter((todo:Todo)=> !todo.completed); return state} )
);


export const todosReducer = (state:any, action:any) => {
 return _todosReducer(state, action);
}

