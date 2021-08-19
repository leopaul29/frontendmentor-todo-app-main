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
    this.todos = TODOS;
  }

}
