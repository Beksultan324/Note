import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { ChildCompComponent } from './child-comp/child-comp.component';

import { DataService } from './services/data.service';
import { LogService } from './services/log.service';

import { User, IUser, ICreateUser, IEditUser } from './models/users';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService],
})
export class AppComponent {

  myForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
  });

  editForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    id: new FormControl()
  });

  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {

    this.httpService.getUsers().subscribe(
      (getUsers: User[]) => {
        this.users = getUsers;
      }
    );
  }

  onCreateUser() {
    console.log(this.myForm.value);

    const body: ICreateUser = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone
    };

    console.log(body);

    this.httpService.createUser(body).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onEditUser() {
    console.log(this.editForm.value);

    const body: IEditUser = {
      name: this.editForm.value.name,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      id: this.editForm.value.id
    };

    this.httpService.editUser(body).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}

// data
// ['aplle', 'mouse'] => string[]
// [{}, {}] => IUser[]
// a = [1, 2, 5] => a[0] = 1;

/*
  this.http.get('http://localhost:3000/users').subscribe((data: IUser[]) => {
      if (data[0]) { // data.lenght
        this.user = new User(data[0].name, data[0].age);
      }
  });



  this.httpService.getData().subscribe(
      (data: IUser[]) => {
        console.log(this.myForm.value.userName);
        this.myForm.value.userName = data[0].name;
        this.myForm.value.userEmail = data[0].email;
        this.myForm.value.userPhone = data[0].phone;
      }
    );


*/
