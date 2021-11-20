import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { filter, first, map, scan, take } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
  providers: [DataService, LogService],
})
export class ChildCompComponent implements OnInit {
  @ViewChild('rxjs', { static: true })
  rxjs: ElementRef | undefined;

  @ViewChild('clear', { static: true })
  clear: ElementRef | undefined;
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement> | undefined;

  name = '';
  people = [
    {
      name: 'Kate',
      age: 23,
    },
    {
      name: 'Loki',
      age: 21,
    },
    {
      name: 'Nake',
      age: 16,
    },
    {
      name: 'Tom',
      age: 29,
    },
  ];

  isVerdanaFont = true;
  isSegoePrintFont = true;

  isUserLogedIn = false;

  constructor() {}
  ngOnInit(): void {
    // Динамическое изменение стилей
    this.rxjs.nativeElement.addEventListener('click', () => {
      this.isSegoePrintFont = !this.isSegoePrintFont;
    });


    // ----------------------------------------------------------
    // console.log(this.rxjs); // Т.к. мы указали в ViewChild в качестве опции {static: true}, то он теперь доступен в ngOnInit().

    // this.rxjs.nativeElement.addEventListener('click', () => {
    //   interval(1000)
    //     .pipe(
    //       take(this.people.length),
    //       filter((v) => this.people[v].age >= 18),
    //       map((v) => this.people[v].name),
    //       scan((acc, v) => acc.concat(v), [])
    //     )
    //     .subscribe((val) => {
    //       console.log(val);
    //       return (this.name = val.join(' '));
    //     });
    // });

    // const stream$ = of(1, 2, 3, 4, 'hello');
    // stream$.subscribe((val) => {
    //   console.log(val);
    // });

    // const arr$ = from([1, 2, 3, 4]);
    // arr$.pipe(scan((acc, val) => acc.concat(val), [])).subscribe((val) => {
    //   console.log(val);
    // });

    // const stream$ = new Observable((observer) => {
    //   observer.next('First value');
    //   setTimeout(() => observer.next('After 1sec'), 1000);
    //   setTimeout(() => observer.complete(), 1500);
    //   setTimeout(() => observer.error('Somthing went wrong'), 2000);
    //   setTimeout(() => observer.next('After 3sec'), 3000);
    // });

    // stream$.subscribe(
    //   (event) => console.log('Value: ', event),
    //   (err) => console.log(err),
    //   () => console.log('Complete')
    // );

    // document.addEventListener('click', () => {
    //   const steam$ = new ReplaySubject(2); // if here (2), then we have 2 message 'Hello' and 'World'
    //   steam$.next('Hello!');
    //   steam$.next('World!');
    //   steam$.subscribe((v) => console.log(v));
    // });

    // fromEvent(this.canvas.nativeElement, 'mousemove')
    //   .pipe(
    //     map((e: MouseEvent) => ({
    //       x: e.offsetX,
    //       y: e.offsetY,
    //       ctx: (e.target as HTMLCanvasElement).getContext('2d'),
    //     }))
    //   )
    //   .subscribe((pos) => {
    //     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
    //   });

    // this.clear.nativeElement.addEventListener('click', () => {
    //   const canvas = this.canvas.nativeElement;
    //   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    // });
  }

  divOnClick(): void {
    console.log('div');
  }

  HOnClick(): void {
    console.log('h2');
  }

  onClick(): void {
    console.log('p');
  }

  isFontWeight = true;
}
