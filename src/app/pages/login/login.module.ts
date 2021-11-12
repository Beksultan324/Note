import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';


const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [  ],
  providers: [
    MatStepper,
    CdkStepper,
  ]
})
export class LoginModule {}
