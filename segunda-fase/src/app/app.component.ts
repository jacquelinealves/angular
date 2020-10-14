import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  ids: number[] = [];
  lastId: number = 0;

  delete(id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add() {
    this.lastId++;
    this.ids.push(this.lastId);
  }

  // PIPES
  n = 3254.53464564;
  hoje = new Date();
  meuCep = 36092050;
}
