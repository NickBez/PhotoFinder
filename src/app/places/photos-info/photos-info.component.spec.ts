import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosInfoComponent } from './photos-info.component';

describe('PhotosInfoComponent', () => {
  let component: PhotosInfoComponent;
  let fixture: ComponentFixture<PhotosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
