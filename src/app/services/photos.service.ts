import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Photo } from '../places/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private _commonQueryParams:string = `client_id=${environment.clientId}&client_secret=${environment.clientSecret}&v=${environment.apiVersion}`;

  private readonly _photoSource = new BehaviorSubject<Array<Photo>>([]);

  public readonly photos$ = this._photoSource.asObservable();

  constructor(private _http: HttpClient) { }

  public getPhotos():Array<Photo> {
    return this._photoSource.getValue();
  }

  private _setPhotos(photos:Array<Photo>){
    this._photoSource.next(photos);
  }

  public get(placeId:string):Observable<void> {
    return this._http.get(`${environment.apiBaseUrl}/venues/${placeId}/photos?${this._commonQueryParams}&group=venue&limit=10`).pipe(
      map((res:any) => this._setPhotos(res.response.photos.items as Array<Photo>)),
      shareReplay()
    );
  }
}
