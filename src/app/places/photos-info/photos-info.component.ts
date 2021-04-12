import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from '../interfaces/photo';

@Component({
  selector: 'app-photos-info',
  templateUrl: './photos-info.component.html',
  styleUrls: ['./photos-info.component.scss']
})
export class PhotosInfoComponent implements OnInit {

  public photoId:string = '';
  public photo:Photo;

  constructor(private _photosService:PhotosService, private _route:ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.photoId = this._route.snapshot.paramMap.get('id');
    this.photo = this._photosService.getPhotos().find(e => e.id === this.photoId);
  }

  public loadImage():string {

    if(this.photo){
      return `${this.photo?.prefix}250x250${this.photo?.suffix}`;
    }else{
      return 'assets/img/placeholder.jpg';
    }
  }

}
