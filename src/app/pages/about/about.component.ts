import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, interval, of } from 'rxjs';
import { filter, first, map, startWith, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000).pipe(
      first((val) => {
        return val !== 0 && val % 2 === 0;
      }),
    ).subscribe((val) => {
      console.log(val);
    });

    // tap((val) => {
    //   console.log(`from tap: ${val}`);
    // }),
    // filter((val) => {
    //   return val % 3 === 0;
    // }),

    // map((val) => {
    //   return null;
    // }),

    of('stroka').pipe(

    ).subscribe((val) => {
      console.log(val);
    });

    // from(['news', 'oo', 'dasd']).subscribe((val) => {
    //   console.log(val);
    // });
  }
}
