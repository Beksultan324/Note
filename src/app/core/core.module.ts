import { ErrorHandler, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './errors/global-error-handler';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ]
})
export class CoreModule { }
