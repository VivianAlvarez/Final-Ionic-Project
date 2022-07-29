import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'yellowbell',
    loadChildren: () => import('./yellowbell/yellowbell.module').then( m => m.YellowbellPageModule)
  },
  {
    path: 'sdr',
    loadChildren: () => import('./sdr/sdr.module').then( m => m.SdrPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'tr',
    loadChildren: () => import('./tr/tr.module').then( m => m.TrPageModule)
  },
  {
    path: 'ddr',
    loadChildren: () => import('./ddr/ddr.module').then( m => m.DdrPageModule)
  },
  {
    path: 'snbnt',
    loadChildren: () => import('./snbnt/snbnt.module').then( m => m.SnbntPageModule)
  },
  {
    path: 'ps',
    loadChildren: () => import('./ps/ps.module').then( m => m.PsPageModule)
  },
  {
    path: 'es',
    loadChildren: () => import('./es/es.module').then( m => m.EsPageModule)
  },
  {
    path: 'npv',
    loadChildren: () => import('./npv/npv.module').then( m => m.NpvPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
