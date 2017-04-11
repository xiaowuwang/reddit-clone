import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { ArticleService } from './article.service';
import { ArticleListHeaderComponent } from './article-list-header/article-list-header.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news/reddit-r-all',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news/:sourceKey',
    component: ArticleListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleListHeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })  // .../#/crisis-center/  
  ],
  providers: [
    ArticleService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
