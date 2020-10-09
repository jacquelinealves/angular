import { Component, Input } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() title: string;
  @Input() photos: string[] = [];

  photoActual: number = 0;
  totalPhotos: number;

}