import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  apiCount: number = 0;
  isLoading$: Observable<boolean> = this.isLoading.asObservable();

  constructor() { }

  show(){
    this.apiCount++;
    this.isLoading.next(this.apiCount > 0);
  }

  hide(){
    if(this.apiCount > 0){
      this.apiCount--;
    }
    this.isLoading.next(this.apiCount > 0);
  }

}
