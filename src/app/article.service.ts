import { Injectable } from '@angular/core';
import { Article } from "app/article";
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/toPromise';

const baseUrl ='https://newsapi.org';
const  newsApiKey ='c29bfb1e76054a40bd3dadbeac324a29';

@Injectable()
export class ArticleService {
  constructor(
    private http: Http
  ) { }
  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('apiKey',newsApiKey);
    params.set('source', 'reddit-r-all');
    return this.http
              .get(`${baseUrl}/v1/articles`,{
                search: params
              })
              .toPromise()
              .then(r=> r.json())
              .then(json=>json.articles)
              .then(articles=>{
                const list = articles
                          .map(article=>new Article(
                            article.title,
                            article.description,
                            article.urlToImage
                          ))
                console.log('json->', list);
                return list;
              })
              .catch(err=>{
                console.log('we got na error', err);
              });



              }
}