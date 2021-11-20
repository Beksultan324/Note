import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IEmployee } from 'src/app/models/employees';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { PostsApiService } from 'src/app/services/posts-api.service';
import { DialogComponent } from './dialog/dialog.component';
import { IProductConfigs, PRODUCT_CONFIGS, PRODUCT_NAME } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  myData = new Date();
  welcome = 'Welcome!';
  sum = 15.32;

  title = '';

  worker: string;
  employees$: Observable<IEmployee[]> = this.employeesApi.getEmployees();
  employeeName$: Observable<string> = this.employeesApi.getEmployees().pipe(
    map((employees) => {
      return employees[0].name;
    })
  );

  constructor(
    private employeesApi: EmployeesApiService,
    private postsApi: PostsApiService,
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
    @Inject(PRODUCT_NAME) prodName: string,
    @Inject(PRODUCT_CONFIGS) productConfigs: IProductConfigs
  ) {
    console.log(productConfigs);
    // console.log(postsApi);
  }

  ngOnInit(): void {
    // throwError('failed to get').pipe(
    //   catchError((val) => {
    //     console.log(`error in get ${val}`);
    //     return of([]);
    //   })
    // ).subscribe((employees) => {
    //   this.worker = employees[0].name;
    //   this.changeDetectorRef.detectChanges();
    //   console.log(this.worker);
    // });

    // setTimeout(() => {
    //   this.worker = 'Alan';
    // }, 2000);

    // const prom = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('Geroge');
    //   }, 2000);
    // });

    // prom.then((val: string) => {
    //   this.worker = val;
    //   this.changeDetectorRef.detectChanges();
    // });
  }

  log() {
    console.log('My name is Giorgio');
  }

  click() {
    console.log('click!');
  }

  genereteError() {
    throw new Error('Can not generate report!');
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: { title: this.title },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //     this.title = result;
  //   });
  // }
}

// let com = new ProductsComponent();

// com.welcome = 'das';
// div.innierHhtml = com.welcome

// For default
// observable.subscribe then emit value => detect changes
// onClick => detect changes
// promise => detect changes
// @Input() gets value

// OnPush
// observable via async
// onClick => detect changes
// @Input() gets value
