import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  inputValue: string | undefined;

  constructor(public mainServer: TodosService) {}

  getValue() {
    this.inputValue && this.mainServer.addTodo(this.inputValue);

    this.inputValue = '';
  }
}
