import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';

type TabType = 'done' | 'progress' | 'start';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input() data: any;
  @Input() tab: TabType = 'start';

  constructor(public todoAction: TodosService) {}
}
