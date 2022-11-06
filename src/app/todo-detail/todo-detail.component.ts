import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}
  @Input() selectTodo?: Todo;
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectTodo = this.todoService.getTodo(id);
  }

  back() {
    this.location.back();
  }
}
