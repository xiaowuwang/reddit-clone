import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'new/reddit-r-all',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'new/:sourceKey',
        component: ArticleListComponent
    }
];

export const appRoutes =
    RouterModule.forRoot(routes);