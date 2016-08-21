import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TodoViewModel } from '../shared/interfaces';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todosModel: TodoViewModel[];
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
}
