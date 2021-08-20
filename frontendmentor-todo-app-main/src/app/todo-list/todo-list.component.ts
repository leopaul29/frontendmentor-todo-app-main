import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = TODOS;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todos.push({ name } as Todo);
  }

}
