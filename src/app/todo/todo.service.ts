import { Injectable } from '@angular/core';
import { Todo, todos } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  todos: Todo[] = todos;
  getTodos(): Observable<Todo[]> {
    const Todos = of(this.todos);
    return Todos;
  }
  addTodo(name: string): void {
    this.todos.push({
      id: Date.now(),
      name,
    });
  }
}
