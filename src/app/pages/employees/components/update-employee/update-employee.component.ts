import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/models/employees';
import { EmployeesApiService } from 'src/app/services/employees-api.service';

@Component({
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(
    private employeeApiService: EmployeesApiService,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee
  ) { }

  editForm = new FormGroup({
    name: new FormControl(this.data.name, Validators.required),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.data.phone, [
      Validators.required,
      Validators.pattern('[0-9, +]{13}'),
    ]),
    salary: new FormControl(this.data.salary, [Validators.required, Validators.max(50000)]),
    lastVacation: new FormControl(this.data.lastVacation, Validators.required),
  });

  ngOnInit(): void { }

  edit(): void {
    const body: IEmployee = {
      name: this.editForm.value.name,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      salary: this.editForm.value.salary,
      lastVacation: this.editForm.value.lastVacation,
      id: this.data.id
    };

    this.employeeApiService.editEmployee(body).subscribe(
      () => this.dialogRef.close(true)
    );
  }

  // tslint:disable-next-line: typedef
  getErrorMessage(controlName: string) {
    const control = this.editForm.controls[controlName];

    if (control.hasError('required')) {
      return `You must enter ${controlName}`;
    }

    if (control.hasError('email')) {
      return 'Not a valid email';
    }

    if (control.hasError('pattern')) {
      return 'Not a valid phone number';
    }

    if (control.hasError('max')) {
      return `It should be less than ${control.errors.max.max}`;
    }
  }

}
