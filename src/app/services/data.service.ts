import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable(
  // {  providedIn: 'root'}
  )
export class DataService {

  private data: string[] = ['Apple X6', 'Samsung G10', 'Xaomi 9C'];

  constructor(@Optional() private logService: LogService) {}

  getData(): string[] {
    if (this.logService) this.logService.write('Получение данных');
    return this.data;
  }

  // tslint:disable-next-line: typedef
  addData(name: string){
    this.data.push(name);
    if (this.logService) this.logService.write('Добавление данных');
  }

}
