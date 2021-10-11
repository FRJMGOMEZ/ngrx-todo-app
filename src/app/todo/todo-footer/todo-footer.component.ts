import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as fActions from '../../filter/filter.actions';
import * as tActions from '../todo-actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter:fActions.validFilters = 'todos';
  filters: fActions.validFilters[] = ['todos', 'completed', 'pending'];
  pending:number = 0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe((appState:AppState)=>{
     this.currentFilter = appState.filter;
     this.pending = appState.todos.filter((todo:Todo)=> !todo.completed).length;
    });
  }

  switchFilter(filter: fActions.validFilters){
    this.store.dispatch(fActions.setFilter({filter}));
  }

  clearCompleted(){
    this.store.dispatch(tActions.clearCompleted());
  }

}
