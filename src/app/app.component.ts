import { Component } from '@angular/core';
import {  BehaviorSubject, combineLatest, from, mergeAll, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num: number =  0;
  sentense: string = "";
  first: number = 0
  second: number = 0;
  firstBit = new Subject<number>()
  secondBit = new Subject<number>()

  handleFirst() {
    this.firstBit.next(this.first)
    // this.firstBit.complete()
    
  }

  handleSecond() {
    this.secondBit.next(this.second);
    // this.secondBit.complete();
  }

  

  $mergeAll = combineLatest([this.firstBit, this.secondBit], (f, s) => { return f + s})
  increment() {
     this.num = this.num + 1;
  }

  decrement() {
     this.num =  this.num -1;
  }

}
