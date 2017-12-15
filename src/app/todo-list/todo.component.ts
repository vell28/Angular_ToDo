import { Component } from '@angular/core';

import{ Todos } from '../service/todo.service';
import{ todos } from '../shared/data.mock';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
})

export class Todolist  {
  title = 'Angular ToDo';
  todos: Todos[] = todos;
  newTodoTitle: string = '';

  toggle(todo: any){
    todo.completed = !todo.completed;
  }
  delete(todo: any){
    let index = this.todos.indexOf(todo);

    if(index > -1){
      this.todos.splice(index, 1);
    }
  }
  create(event: Event, title: string){
    event.preventDefault();
    let todo: Todos = new Todos(this.newTodoTitle);

    this.todos.push(todo);
  }
}