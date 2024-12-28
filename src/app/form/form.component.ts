import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Department } from '../model/department.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  deptForm!: FormGroup;

  constructor(private fb: FormBuilder, private departmentService: DepartmentService){
    this.deptForm = this.fb.group({
      deptName: ['']
    })
  }

  onSubmit(){
    if(this.deptForm.valid){
      this.departmentService.addDepartment(this.deptForm.value).then((response: Department | unknown) => {
        console.log(response);
        swal.fire({
          title: "Department added successfully!",
          icon: 'success',
          draggable: true
        });
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
