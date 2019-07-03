import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTestFormComponent } from './sports-test-form.component';

describe('SportsTestFormComponent', () => {
  let component: SportsTestFormComponent;
  let fixture: ComponentFixture<SportsTestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsTestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
