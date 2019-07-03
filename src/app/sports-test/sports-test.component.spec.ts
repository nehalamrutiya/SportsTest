import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTestComponent } from './sports-test.component';

describe('SportsTestComponent', () => {
  let component: SportsTestComponent;
  let fixture: ComponentFixture<SportsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
