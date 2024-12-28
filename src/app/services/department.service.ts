import { Injectable } from '@angular/core';
import { Department } from '../model/department.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private restService: RestService) { }

  async addDepartment(data: Department): Promise<Department | unknown> {
    try {
      const endPoint = '/department';
      const restInstance = this.restService.getRestInstance();

      const response = await restInstance.post<Department>(endPoint, {
        deptName: data.deptName
      })
      return response;
    } catch (error) {
      return error;
    }
  }

  async getDepartment(): Promise<Department | unknown> {
    try {
      const endPoint = '/department';
      const restInstance = this.restService.getRestInstance();

      const response = await restInstance.get<Department>(endPoint)

      return response.status === 200 ? response.data : [];
    } catch (error) {
      return error;
    }
  }
}
