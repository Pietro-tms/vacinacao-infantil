import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'children',
    loadComponent: () =>
      import('./pages/children/children.page').then((m) => m.ChildrenPage),
  },
  {
    path: 'child/:id',
    loadComponent: () =>
      import('./pages/child-detail/child-detail.page').then(
        (m) => m.ChildDetailPage,
      ),
  },
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./pages/campaigns/campaigns.page').then((m) => m.CampaignsPage),
  },
];
