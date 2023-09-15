import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CalculateService } from './service/calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor( private calculate: CalculateService) {}
  num: number =  0;
  sentense: string = "";
  first: number = 0
  second: number = 0;

  $mergeAll = combineLatest([this.calculate.firstBit, this.calculate.secondBit], (f, s) => { return f + s})
  increment() {
     this.num = this.num + 1;
  }

  decrement() {
     this.num =  this.num -1;
  }

  getNumbers(first?: number, second?: number): void {
    this.calculate.updateBits({first, second})
  }
}
