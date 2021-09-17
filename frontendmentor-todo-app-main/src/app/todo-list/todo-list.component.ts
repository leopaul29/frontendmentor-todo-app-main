import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  showTodos: Todo[] = [];
  leftTodos: Todo[] = [];
  completeCount: number = 0;
  filterID: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.getTodos();
    this.setCompleted();
  }

  getTodos(): void {
    this.todos = TODOS;
    this.sortAll();
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
    this.updatecompleteCount();
    this.displayTodos();
  }

  setCompleted(): void {
    this.updatecompleteCount();
  }

  updatecompleteCount(): void {
    this.leftTodos = this.todos.filter((t) => {
      return !t.complete;
    });
    this.completeCount = this.leftTodos.length;
  }
  displayTodos(): void {
    this.showTodos = this.todos;
  }

  clearComplete(): void {
    this.todos = this.todos.filter((t) => {
      return !t.complete;
    });
    this.sortAll();
  }

  /* todos filter */ 
  sortAll(): void {
    this.displayTodos();
    this.filterID = 0;
  }

  sortActive(): void {
    this.showTodos = this.todos.filter((t) => {
      return !t.complete;
    });
    this.filterID = 1;
  }

  sortCompleted(): void {
    this.showTodos = this.todos.filter((t) => {
      return t.complete;
    });
    this.filterID = 2;
  }


  /** drag and drop **/
  reorderList(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
