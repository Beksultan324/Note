import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPost } from 'src/app/models/post';
import {MatSnackBar} from '@angular/material/snack-bar';

import { PostsApiService } from 'src/app/services/posts-api.service';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PizzaBanerComponent } from './components/pizza-baner/pizza-baner.component';
import { TacosBanerComponent } from './components/tacos-baner/tacos-baner.component';
import { HttpErrorResponse } from '@angular/common/http';

type Banners = PizzaBanerComponent | TacosBanerComponent;

interface Food {
  value: Type<Banners>;
  viewValue: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})

export class PostsComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  containerRef: ViewContainerRef;

  posts: IPost[] = [];
  body = '';
  title: string;

  foods: Food[] = [
    // {value: 'steak-0', viewValue: 'Steak'},
    {value: PizzaBanerComponent, viewValue: 'Pizza'},
    {value: TacosBanerComponent, viewValue: 'Tacos'},
  ];

  selected: Type<Banners>;

  posts$: Observable<IPost[]>; // Тип для posts

  constructor(
    private postsApiService: PostsApiService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Через async pipe
    this.posts$ = this.postsApiService.getPosts();

    // Примитивный способ
    this.postsApiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });

    this.postsApiService.getFakePosts().pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        this.matSnackBar.open('Error not correct data');
        return of();
      })
    ).subscribe();

    // const componentFactory: ComponentFactory<CreatePostComponent> =
    //   this.componentFactoryResolver.resolveComponentFactory(
    //     CreatePostComponent
    //   );

    // const componentRef = this.containerRef.createComponent(componentFactory);
    // console.log(this.containerRef);
  }

  addComponent(): void {

    if (this.selected) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.selected);

      const componentRef: ComponentRef<Banners> = this.containerRef.createComponent(componentFactory);

      componentRef.instance.title = this.title;
    } else {
      this.matSnackBar.open('Select banner', 'close', { duration: 1000 });
    }
    // console.log(this.containerRef);
  }
}
