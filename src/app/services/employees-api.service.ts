import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee, ICreateEmployee } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesApiService {

  endPoint = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.endPoint);
  }

  createEmployee(body: ICreateEmployee): Observable<void> {
    return this.http.post<void>(this.endPoint, body);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/${id}`);
  }

  editEmployee(body: IEmployee): Observable<void> {
    return this.http.put<void>(`${this.endPoint}/${body.id}`, body);
  }
}
