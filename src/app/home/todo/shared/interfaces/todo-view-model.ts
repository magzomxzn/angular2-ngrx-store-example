
import { Todo } from './todo';


export interface TodoViewModel {
  filteredTodos: Todo[],
  totalTodos: number,
  completedTodos: number
}
