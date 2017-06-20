import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'clan/:id',
  component: ClanDetailComponent
  },
  {
  path: 'player/:id',
  component: PlayerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
