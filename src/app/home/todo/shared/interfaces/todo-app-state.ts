import { Todo } from './todo';

export interface TodoAppState {
  Todos: Todo[],
  VisibilityFilter: any
}
