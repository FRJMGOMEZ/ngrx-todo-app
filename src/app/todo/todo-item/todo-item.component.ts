import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @ViewChild('input') input?: ElementRef;
  @Input() todo:Todo;
  txtInput:FormControl;
  inputCheck:FormControl;
  editable:boolean = false;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.store.select('todos').subscribe((todos:Todo[])=>{
     this.todo = todos.find((t)=>{ return  t.id === this.todo.id});
    });
    this.inputCheck = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo?.text,Validators.required);
    this.inputCheck.valueChanges.subscribe((val)=>{
        this.store.dispatch(actions.toggleTodo({id:this.todo.id}))
    });
  }

  changeToEditable(){
    if(!this.todo?.completed){
      this.editable = true;
      setTimeout(()=>{
        this.input?.nativeElement.focus();
      },1);
    }
  }

  endEdition(){
    this.editable = false;
   if(this.txtInput.value && this.txtInput.value != this.todo.text){
     this.store.dispatch(actions.editTodo({ id: this.todo.id, text: this.txtInput.value }));
   }
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id:this.todo.id}));
  }

}
