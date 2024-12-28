import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Department } from '../model/department.model';

@Component({
  selector: 'app-dept-list',
  imports: [],
  templateUrl: './dept-list.component.html',
  styleUrl: './dept-list.component.scss'
})
export class DeptListComponent implements OnInit{
  departmentList: Department[] = [];

 constructor(private departmentService: DepartmentService){}

 ngOnInit(): void {
  this.getDepartmentList();
 }

 getDepartmentList() {
  this.departmentService.getDepartment().then((response: Department | unknown) => {
    this.departmentList = response as Department[];
  }).catch((error) => {
    console.log(error);
  })
 }
}
