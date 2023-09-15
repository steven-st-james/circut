import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  private readonly _firstBit: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly _secondBit: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public get firstBit(): Observable<number> {
    return this._firstBit.asObservable();
  }

  public get secondBit(): Observable<number> {
    return this._secondBit.asObservable();
  }

  public updateBits({ first, second }: { first?: number; second?: number }): void {
  
    if (first) {
      this._firstBit.next(first);
    }
    if (second) {
      this._secondBit.next(second);
    }
  }
}
