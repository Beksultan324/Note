import { Injectable } from '@angular/core';

@Injectable(
  // { providedIn: 'root'}
  )
export class LogService {

  write(logMessage: string) {
    console.log(logMessage);
  }

  constructor() { }
}
