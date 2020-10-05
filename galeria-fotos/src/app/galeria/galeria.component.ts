import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  @Input() title: string;

  @Input() photos: string[] = [
    // 'http://localhost:4200/assets/01.jpg',
    './assets/01.jpg',
    './assets/02.jpg',
    './assets/03.jpg',
    './assets/04.jpg',
    './assets/05.jpg',
    './assets/06.jpg',
    './assets/07.jpg',
    './assets/08.jpg',
    './assets/09.jpg',
    './assets/10.jpg'
  ];

  constructor() {}

  ngOnInit(): void {}
}