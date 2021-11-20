import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  handleError(error: Error) {
    // console.log(error.message);

    this.snackBar.open(error.message, 'close');

    console.error(error);

    // Check if it's an error from an HTTP response
    // if (!(error instanceof HttpErrorResponse)) {
    //   error = error.rejection; // get the error object
    // }
    // this.zone.run(() =>
    //   this.errorDialogService.openDialog(
    //     error?.message || 'Undefined client error',
    //     error?.status
    //   )
    // );

    // console.error('Error from global error handler', error);
  }
}
