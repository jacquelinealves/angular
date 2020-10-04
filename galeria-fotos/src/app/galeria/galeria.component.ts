import { Component, Input } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() titulo: string;
  @Input() fotos: string[] = [];
}