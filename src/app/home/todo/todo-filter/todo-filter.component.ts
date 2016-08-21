import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html'
})
export class TodoFilterComponent {
  public filters = [
    {friendly: 'All', action: 'SHOW_ALL'},
    {friendly: 'Completed', action: 'SHOW_COMPLETED'},
    {friendly: 'Active', action: 'SHOW_ACTIVE'}
  ];
  @Output() filterSelect: EventEmitter<string> = new EventEmitter<string>();
}
