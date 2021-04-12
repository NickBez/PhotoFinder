import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Place } from '../places/interfaces/place';
import { Photo } from '../places/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _commonQueryParams:string = `client_id=${environment.clientId}&client_secret=${environment.clientSecret}&v=${environment.apiVersion}`;

  private readonly _placesSource = new BehaviorSubject<Array<Place>>([]);

  public readonly places$ = this._placesSource.asObservable();

  constructor(private _http: HttpClient) { }

  public getPlaces():Array<Place> {
    return this._placesSource.getValue();
  }

  private _setPlaces(places:Array<Place>){
    this._placesSource.next(places);
  }

  public get(search:string): Observable<void> {
    return this._http.get(`${environment.apiBaseUrl}/venues/search?${this._commonQueryParams}&near=${search}&intent=browse&radius=10000&query=&limit=30`).pipe(
      map((res:any) => this._setPlaces(res.response.venues as Array<Place>)),
      shareReplay()
    );
  }

}
