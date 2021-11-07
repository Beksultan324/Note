import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateEmployee } from 'src/app/models/employees';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('+996', [
      Validators.required,
      Validators.pattern('[0-9, +]{13}'),
    ]),
    salary: new FormControl(null, [Validators.required, Validators.max(50000)]),
    lastVacation: new FormControl('', Validators.required),
  });

  constructor(
    private employeeApiService: EmployeesApiService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.location.back();
  }

  create(): void {
    const body: ICreateEmployee = {
      name: this.createForm.value.name,
      email: this.createForm.value.email,
      phone: this.createForm.value.phone,
      salary: this.createForm.value.salary,
      lastVacation: this.createForm.value.lastVacation,
    };

    this.employeeApiService.createEmployee(body).subscribe();

    this.router.navigate(['/employees']); // Переносит страницу employees
  }

  // tslint:disable-next-line: typedef
  getErrorMessage(controlName: string) {
    const control = this.createForm.controls[controlName];

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

