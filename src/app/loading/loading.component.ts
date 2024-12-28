import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  isLoading: boolean = false;
  constructor(protected loadingService: LoadingService){
    this.loadingService.isLoading$.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    })
  }
}
