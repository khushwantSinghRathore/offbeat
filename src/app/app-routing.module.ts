import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'songslist',
    loadChildren: () => import('./songslist/songslist.module').then( m => m.SongslistPageModule)
  },
  {
    path: 'devinfo',
    loadChildren: () => import('./devinfo/devinfo.module').then( m => m.DevinfoPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'chooselang',
    loadChildren: () => import('./chooselang/chooselang.module').then( m => m.ChooselangPageModule)
  },
  {
    path: 'choose-artist',
    loadChildren: () => import('./choose-artist/choose-artist.module').then( m => m.ChooseArtistPageModule)
  },
  {
    path: 'home-tabs',
    loadChildren: () => import('./home-tabs/home-tabs.module').then( m => m.HomeTabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'search-tabs',
    loadChildren: () => import('./search-tabs/search-tabs.module').then( m => m.SearchTabsPageModule)
  },
  {
    path: 'radio-tabs',
    loadChildren: () => import('./radio-tabs/radio-tabs.module').then( m => m.RadioTabsPageModule)
  },
  {
    path: 'playlist-tabs',
    loadChildren: () => import('./playlist-tabs/playlist-tabs.module').then( m => m.PlaylistTabsPageModule)
  },
  {
    path: 'radioplay',
    loadChildren: () => import('./radioplay/radioplay.module').then( m => m.RadioplayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
