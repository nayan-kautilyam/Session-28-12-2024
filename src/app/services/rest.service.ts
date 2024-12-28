import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private restInstance!: AxiosInstance;

  constructor(private loadingService: LoadingService) {
    this.restInstance = axios.create({
      baseURL: 'http://localhost:3000',
    });

    this.setInterCeptor();
  }

  public setInterCeptor(){
    this.restInstance.interceptors.request.use(
       (config) => {
        this.loadingService.show();
        return config;
      },
       (error) => {
        setTimeout(() => {
          this.loadingService.hide();
        }, 2500);
        return Promise.reject(error);
      }
    );

    this.restInstance.interceptors.response.use(
       (response) => {
        setTimeout(() => {
          this.loadingService.hide();
        }, 2500);
        return response;
      },
       (error) => {
        setTimeout(() => {
          this.loadingService.hide();
        }, 2500);
        return Promise.reject(error);
      }
    );
  }

  public getRestInstance() {
    return this.restInstance;
  }
}
