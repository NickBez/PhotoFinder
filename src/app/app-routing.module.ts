import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
    {path: '', redirectTo: 'places', pathMatch: 'full'},
    {path: 'places', loadChildren: () => import('./places/places.module').then(module => module.PlacesModule)},
    {path: '**', component: AppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}