import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTestDetailComponent } from './sports-test-detail.component';

describe('SportsTestDetailComponent', () => {
  let component: SportsTestDetailComponent;
  let fixture: ComponentFixture<SportsTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
