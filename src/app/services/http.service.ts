import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, IUser, ICreateUser, IEditUser } from '../models/users';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  endPoint = 'http://localhost:3000/users';
  endPointCreate = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<IUser[]>(this.endPoint).pipe(
      map((users) => {
        return users.map((item) => new User(item.name, item.email, item.phone));
      })
    );
  }

  createUser(body: ICreateUser): Observable<void> {

    return this.http.post<void>(this.endPointCreate, body);
  }

  editUser(body: IEditUser): Observable<void> {

    return this.http.put<void>(`${this.endPointCreate}/${body.id}`, body);
  }
}
