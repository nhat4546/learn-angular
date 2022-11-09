import { Injectable } from '@angular/core';
import { Todo, todos } from './todo';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  todos: Todo[] = todos;
  private todoUrl = 'https://jsonplaceholder.typicode.com/users';

  getTodos(): Observable<Todo[]> {
    // const Todos = of(this.todos);
    // return Todos;
    return this.http
      .get<Todo[]>(this.todoUrl)
      .pipe(catchError(this.handleError<Todo[]>('get todo', [])));
  }
  getTodo(id: number) {
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<any>(url);
    // return this.todos.find((todo: Todo) => todo.id === id);
  }
  addTodo(name: string): void {
    this.todos.push({
      id: Date.now(),
      name,
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
