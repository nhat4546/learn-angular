import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  constructor() {}
  @Input() selectTodo?: Todo;
  ngOnInit(): void {}
}
