import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsApiService } from 'src/app/services/posts-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];
  body = '';

  constructor(private postsApiService: PostsApiService) { }

  ngOnInit(): void {
    this.postsApiService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
  }

}
