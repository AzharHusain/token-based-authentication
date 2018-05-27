import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeskComponent } from './main-desk.component';

describe('MainDeskComponent', () => {
  let component: MainDeskComponent;
  let fixture: ComponentFixture<MainDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
