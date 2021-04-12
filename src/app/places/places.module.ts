import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { PlacePhotosComponent } from './place-photos/place-photos.component';
import { PhotosInfoComponent } from './photos-info/photos-info.component';



@NgModule({
  declarations: [
    PlacesComponent,
    PlacePhotosComponent,
    PhotosInfoComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
