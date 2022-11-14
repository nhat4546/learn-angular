import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}
  todos: any;
  todo?: Todo;
  selectTodo?: Todo;
  name = '';

  ngOnInit(): void {
    console.log('run ngOnInit');
    
    this.getTodos();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('run ngOnChanges');
  }
  ngDoCheck() {
    console.log('run ngDoCheck');
  }
  ngAfterContentChecked() {
    console.log('run ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('run ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('run ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('run ngOnDestroy');
  }
  clickTodo(todo: Todo) {
    this.selectTodo = { ...todo };
  }

  async getTodos() {
    const data = await this.todoService.getTodos();
    this.todos = data;
    // this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(): void {
    this.todoService.addTodo(this.name);
    this.getTodos();
  }
}
