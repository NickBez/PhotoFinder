import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PlacePhotosComponent } from './place-photos/place-photos.component';
import { PhotosInfoComponent } from './photos-info/photos-info.component';
import { PlacesComponent } from './places.component';

// Route Configurations
const appRoutes: Routes = [
    {
        path: '',
        component: PlacesComponent
    },

    {
        path: ':id',
        component: PlacePhotosComponent
    },

    {
        path: 'photo/:id',
        component: PhotosInfoComponent
    }
    
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PlacesRoutingModule {
}