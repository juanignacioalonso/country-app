import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { By } from '@angular/platform-browser';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CoutryPageComponent } from './pages/coutry-page/coutry-page.component';

export const coutryRoutes: Routes = [

  {
    path: '',
    component: CountryLayoutComponent,
    children:[
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },
      {
        path: 'by/:code',
        component: CoutryPageComponent
      },
      {
        path: '**',
        redirectTo:'by-capital'
      },

    ],
  },


];

export default coutryRoutes;
