import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtertodo'
})
export class FilterPipe implements PipeTransform {
  transform(todos:Todo[],filter:validFilters): Todo[] {
    switch(filter){
      case 'todos': return todos;
      case 'completed': return todos.filter((todo:Todo)=> todo.completed); 
      case 'pending': return todos.filter((todo:Todo)=> !todo.completed )
    }
  }

}
