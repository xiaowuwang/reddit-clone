import { Injectable } from '@angular/core';
import { Article } from "app/article";

@Injectable()
export class ArticleService {
  constructor() { }
  public getArticles(): Promise<Article[]> {
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve([
          new Article(
            'The Angular 2 screencast',
            'The easiest way to learn Angular 2 is with Fullstack.io!',
            10
          ),
          new Article(
            'The Angular 3 screencast',
            'The easiest way to learn Angular 3 is with Fullstack.io!',
            8
          ),
          new Article(
            'The Angular 4 screencast',
            'The easiest way to learn Angular 4 is with Fullstack.io!',
            6
          )
        ])  
    },1000);
  });
}
}