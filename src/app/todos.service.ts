import { Injectable } from '@angular/core';

interface stateType {
  id: number;
  title: string;
  done: boolean;
  start: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  initialState: stateType[] = [];

  constructor() {}

  startTodo(id: number) {
    let newList = this.initialState.find((item) => item.id === id);
    newList!.start = true;
  }

  doneTodo(id: number) {
    let newList = this.initialState.find((item) => item.id === id);
    newList!.done = true;
  }

  refreshTodo(id: number) {
    let newList = this.initialState.find((item) => item.id === id);
    newList!.done = false;
  }

  addTodo(title: string) {
    let newList = { id: Date.now(), title, done: false, start: false };
    this.initialState.push(newList);
  }

  deleteTodo(id: number) {
    let newList = this.initialState.filter((item) => item.id !== id);
    this.initialState = newList;
  }
}
