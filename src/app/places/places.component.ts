import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  public places:Array<any> = [];

  constructor(private _placesService:PlacesService, private _router:Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._placesService.places$.subscribe(places => this.places = [...places]);
  }

  public async searchPlaces(value:string): Promise<void> {
    console.log('search location: ', value);
    await this._placesService.get(value).toPromise();
    
  }

  public goToPlace(placeId:string): void {
    this._router.navigate([':id', { id:placeId }], { relativeTo: this._route });
  }

}
