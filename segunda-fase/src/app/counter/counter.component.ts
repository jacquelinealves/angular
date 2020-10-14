import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class  implements OnInit, Input {

  @Input() label: string;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
  ngOnChanges(changes: SimpleChanges):void {
    console.log('changes: ' + JSON.stringify(changes));
  }

}
