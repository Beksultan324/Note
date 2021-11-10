import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  endPoint = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.endPoint);
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.endPoint}/${id}`);
  }

  editPost(body: IPost): Observable<void> {
    return this.http.put<void>(`${this.endPoint}/${body.id}`, body);
  }

  getFakePosts(): Observable<void> {
    return this.http.get<void>(`${this.endPoint}/fake`);
  }
}
