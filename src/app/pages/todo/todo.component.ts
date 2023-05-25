import { Component } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: "app-todo",
  templateUrl: `./todo.component.html`,
})
export class TodoComponent {
  textValue: string = "";
  todoModel = new Todo("breaking of the chain", "done", true);
  todoModel2 = new Todo("developing project", "undone", false);
  todos: Todo[] = [this.todoModel, this.todoModel2];

  submitForm() {
    console.log(this.textValue);
    const todo = new Todo(this.textValue, "undone", false);
    this.todos.push(todo);
    this.textValue = "";
  }
  deleteItem(selectedtodo: string) {
    this.todos = this.todos.filter((todo) => todo.todo !== selectedtodo);
    console.log(this.todos);
  }
  changeStatus(selectedtodo: string) {
    const selectedItem = this.todos.find((todo) => todo.todo === selectedtodo);

    if (selectedItem) {
      selectedItem.completed = !selectedItem.completed;
      console.log(this.todos);
    }
  }
}
