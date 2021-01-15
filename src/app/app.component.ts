import { Component } from '@angular/core';
import{TodoList} from "./todoList";
import{Todoitem} from "./todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("john", [
    new Todoitem("Go for run", true),
    new Todoitem("Get flowers"),
    new Todoitem("Collect tickets"),
    ]);
    get username():string{
      return this.list.user;
    }
    get itemCount():number{
      return this.list.items.length;
    }
    get items(): readonly Todoitem[]{
      return this.list.items.filter(item=>!item.complete);
    }
    addItem(newItem){
      if(newItem!=""){
          this.list.addItem(newItem);
      }
  }
}
