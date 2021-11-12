import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoldDirective } from './directives/bold.directive';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './pages/employees/employees.component';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { ConfirmDialogModule } from './shared/components/confirm-dialog/confirm-dialog.module';
import { UpdateEmployeeComponent } from './pages/employees/components/update-employee/update-employee.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { CreatePostComponent } from './pages/posts/components/create-post/create-post.component';
import { MatSelectModule } from '@angular/material/select';
import { PizzaBanerComponent } from './pages/posts/components/pizza-baner/pizza-baner.component';
import { TacosBanerComponent } from './pages/posts/components/tacos-baner/tacos-baner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'child', component: ChildCompComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contact', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'post', children: [{ path: ':postId', component: PostComponent }] },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    BoldDirective,
    EmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AboutComponent,
    PostsComponent,
    PostComponent,
    CreatePostComponent,
    PizzaBanerComponent,
    TacosBanerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ConfirmDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatStepperModule,
    CdkStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
