import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFavesComponent } from './list-of-faves.component';

describe('ListOfFavesComponent', () => {
  let component: ListOfFavesComponent;
  let fixture: ComponentFixture<ListOfFavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfFavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
