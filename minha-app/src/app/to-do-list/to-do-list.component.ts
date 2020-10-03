import { Component } from '@angular/core';
import { todoItem } from './todoItem';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  tasks: todoItem[] = [
    { description: 'Arrumar a cama', done: true },
    { description: 'Fazer o trabalho prático do Bootcamp', done: false }
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

}
