import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';


const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'section',
    component: SectionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
