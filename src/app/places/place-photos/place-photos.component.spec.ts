import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePhotosComponent } from './place-photos.component';

describe('PlacePhotosComponent', () => {
  let component: PlacePhotosComponent;
  let fixture: ComponentFixture<PlacePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
