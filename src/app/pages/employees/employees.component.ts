import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IEmployee } from 'src/app/models/employees';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  name: string;

  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'salary',
    'lastVacation',
    'actions',
  ];
  employees: IEmployee[] = [];

  employees$: Observable<IEmployee[]>;
  salaries$: Observable<number[]>;

  constructor(
    private employeesApi: EmployeesApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  deleteEmployee(employee: IEmployee): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: `Are you sure want to delete ${employee.name}?` },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.employeesApi.deleteEmployee(employee.id).subscribe(() => this.getEmployees());
      }
    });
  }

  editEmployee(employee: IEmployee): void {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '500px',
      data: employee,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getEmployees();
      }
    });
  }

  getEmployees(): void {
    this.employees$ = this.employeesApi.getEmployees()
    .pipe(
      tap((employees) => {
        this.employees = employees;
      })
    );

    this.salaries$ = this.employeesApi.getEmployees()
    .pipe(
      map((employees: IEmployee[]) => {
        const salaries: number[] = employees.map((item) => {
          return item.salary;
        });
        return salaries;
      })
    );
  }
}
