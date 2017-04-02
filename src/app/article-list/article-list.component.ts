import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/article.service";
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  private articles: Article[];
  constructor(
    private articleService: ArticleService
  ) {  }
  ngOnInit() {
    this.articleService.getArticles().then(articles=>this.articles=articles);
  }
}