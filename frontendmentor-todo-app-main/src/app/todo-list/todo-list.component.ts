import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  completeTodos: Todo[] = [];
  completeCount: number = 0;

  constructor() {
    this.getCompleted();
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = TODOS;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.todos.push({ name } as Todo);
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  getCompleted() {
    this.completeTodos = this.todos.filter((t) => {
      return t.complete;
    });
    this.completeCount = this.completeTodos.length;
    //alert(this.selected_games);
  }
}
