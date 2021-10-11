import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos:Todo[]=[];
  currentFilter:validFilters;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.store.subscribe(({todos,filter}) => {
     this.todos = todos;
     this.currentFilter =filter;
    });
  }

}
