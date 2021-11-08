import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IPost } from 'src/app/models/post';
import { PostsApiService } from 'src/app/services/posts-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsApiService: PostsApiService,
    private location: Location
  ) {}

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  post: IPost;
  // createAt = '';   Переменные createAt и id не нужны т.к все данные с сервера записывается в post.
  // id: number;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          // params = { postId: "0" }
          console.log(params);
          const id = +params.postId;
          return this.postsApiService.getPost(id);
        })
      )
      .subscribe((post: IPost) => {
        this.postForm.patchValue({
          title: post.title,
          body: post.body,
        });
        this.post = post; // В переменную post записываем данные с сервера. (Кроме title, body в нем есть id и createAt)
      });

    // this.activatedRoute.params.subscribe(params => { // params = { postId: "0" }
    //   const id = +params.postId;
    //   this.postsApiService.getPost(id).subscribe(console.log);
    // });

    // this.activatedRoute.params.pipe(
    //   switchMap((params) => {  // params = { postId: "0" }
    //     console.log(params);
    //     const id = +params.postId;
    //     return this.postsApiService.getPost(id);
    //   }),
    //   switchMap(() => {
    //     return of(324);
    //   }),
    // ).subscribe(console.log);
  }

  cancel(): void {
    this.location.back();
  }

  editPost(post): void {
    const body: IPost = {
      ...this.post, // С помощью деструктизации мы записываем к body объект post.
      ...this.postForm.value, // Здесь мы присваем отредактированное значение к body. (Кроме id, createAt в нем есть новое title и body).
    };

    this.postsApiService.editPost(body).subscribe();

    this.location.back();
  }

  // tslint:disable-next-line: typedef
  getErrorMessage(controlName: string) {
    const control = this.postForm.controls[controlName];

    if (control.hasError('required')) {
      return `You must enter ${controlName}`;
    }
  }
}
