import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../interfaces/photo';
import { Place } from '../interfaces/place';
import { PlacesService } from '../../services/places.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-place-photos',
  templateUrl: './place-photos.component.html',
  styleUrls: ['./place-photos.component.scss']
})
export class PlacePhotosComponent implements OnInit {

  public placeId:string = '';

  public place:Place;

  public photos:Array<Photo> = [];

  constructor(private _placesService:PlacesService, private _photosService:PhotosService, private _router:Router, private _route:ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.placeId = this._route.snapshot.paramMap.get('id');
    this.place = this._placesService.getPlaces().find(e => e.id === this.placeId);

    this._photosService.photos$.subscribe(photos => this.photos = [...photos]);
    await this._photosService.get(this.placeId).toPromise();
  }

  public loadImage(photo:Photo):string {
    console.debug('photo: ', photo);
    if(photo){
      return `${photo.prefix}250x250${photo.suffix}`;
    }else{
      return 'assets/img/placeholder.jpg';
    }
  }

  public imageError(imgElement:HTMLImageElement):void {
    imgElement.src='assets/img/placeholder.jpg';
  }

  public goToPhoto(photo:Photo): void {

    if(photo){
      this._router.navigate(['places/photo/:id', { id:photo.id }]);
    }

  }

}
