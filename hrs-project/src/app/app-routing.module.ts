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
  },
  {
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
  {
    path: 'camp',
    loadChildren: () => import('./camp/camp.module').then( m => m.CampPageModule)
  },
  {
    path: 'dtr',
    loadChildren: () => import('./dtr/dtr.module').then( m => m.DtrPageModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./villa/villa.module').then( m => m.VillaPageModule)
  },
  {
    path: 'taal',
    loadChildren: () => import('./taal/taal.module').then( m => m.TaalPageModule)
  },
  {
    path: 'dqr',
    loadChildren: () => import('./dqr/dqr.module').then( m => m.DqrPageModule)
  },
  {
    path: 'ds',
    loadChildren: () => import('./ds/ds.module').then( m => m.DsPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'villas',
    loadChildren: () => import('./villas/villas.module').then( m => m.VillasPageModule)
  },
  {
    path: 'sr',
    loadChildren: () => import('./sr/sr.module').then( m => m.SrPageModule)
  },
  {
    path: 'dlx',
    loadChildren: () => import('./dlx/dlx.module').then( m => m.DlxPageModule)
  },
  {
    path: 'dr',
    loadChildren: () => import('./dr/dr.module').then( m => m.DrPageModule)
  },
  {
    path: 'del',
    loadChildren: () => import('./del/del.module').then( m => m.DelPageModule)
  },
  {
    path: 'deluxe',
    loadChildren: () => import('./deluxe/deluxe.module').then( m => m.DeluxePageModule)
  },
  {
    path: 'fr',
    loadChildren: () => import('./fr/fr.module').then( m => m.FrPageModule)
  },
  {
    path: 'suite',
    loadChildren: () => import('./suite/suite.module').then( m => m.SuitePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
