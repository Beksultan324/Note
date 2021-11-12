import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
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

import { HttpService } from './services/http.service';

export interface ILink {
  text: string;
  href: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService],
})
export class AppComponent {
  links: ILink[] = [
    {
      text: 'Employees',
      href: '/employees',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Child',
      href: '/child',
    },
    {
      text: 'Posts',
      href: '/posts',
    },
    {
      text: 'Products',
      href: '/products',
    },
    {
      text: 'Login',
      href: '/login',
    },
  ];

  showFiller = false;
}
