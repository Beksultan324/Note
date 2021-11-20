import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { PostsApiService } from 'src/app/services/posts-api.service';
import { BoldDirective } from 'src/app/directives/bold.directive';

// IProductConfig
export interface IProductConfigs {
  name: string;
  price: number;
}

const product: IProductConfigs = {
  name: 'phone',
  price: 200
};

class PostsApiService2 {
  endPoint = 'posts/v2';
}

const routes: Routes = [{ path: '', component: ProductsComponent }];
export const PRODUCT_NAME = new InjectionToken<string>('PRODUCT_NAME');
export const PRODUCT_CONFIGS = new InjectionToken<IProductConfigs>('PRODUCT_CONFIGS');

@NgModule({
  declarations: [ProductsComponent, DialogComponent, BoldDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: PRODUCT_NAME,
      useValue: 'Title'
    },
    {
      provide: PRODUCT_CONFIGS,
      useValue: product
    },
    {
      provide: PostsApiService,
      useClass: PostsApiService2,
    }
  ]
})
export class ProductsModule {}

