import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos: Todo[] = [];
  todo?: Todo;
  selectTodo?: Todo;
  name = '';

  ngOnInit(): void {
    this.getTodos();
  }
  clickTodo(todo: Todo) {
    this.selectTodo = { ...todo };
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(): void {
    this.todoService.addTodo(this.name);
    this.getTodos();
  }
}
