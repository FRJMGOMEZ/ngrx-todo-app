import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from './todo-actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  completed:FormControl;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.completed = new FormControl(false);
    this.completed.valueChanges.subscribe((completed:boolean)=>{
      this.toggleAll(completed);
    });
  }

  toggleAll(completed:boolean){
    this.store.dispatch(actions.toggleAll({completed}));
  }

}
