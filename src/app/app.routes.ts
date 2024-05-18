import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { deactivateGuard } from './deactivate.guard';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    title: 'List',
  },
  {
    path: 'create',
    component: CreateComponent,
    title: 'Create',
    // canActivate: [deactivateGuard],
  },
  {
    path: 'detail/:tenParam',
    component: DetailComponent,
    title: 'Detail',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
