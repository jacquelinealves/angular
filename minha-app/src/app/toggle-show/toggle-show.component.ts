import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-show',
  templateUrl: './toggle-show.component.html',
  styleUrls: ['./toggle-show.component.css']
})
export class ToggleShowComponent {

  exibir: boolean = true;
  x: boolean = true;

  toggleShow() {
    this.exibir = !this.exibir;
  }

}
