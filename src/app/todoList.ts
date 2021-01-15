import {Todoitem} from "./todoItem";
export class TodoList{
    constructor(public user:string,private todoItems:Todoitem[]=[]){
    }
    get items():readonly Todoitem[]{
        return this.todoItems;
    }
    addItem(task:string){
        this.todoItems.push(new Todoitem(task));
    }
   
}