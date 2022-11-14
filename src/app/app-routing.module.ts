import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
