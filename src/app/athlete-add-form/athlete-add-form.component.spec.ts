import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteAddFormComponent } from './athlete-add-form.component';

describe('AthleteAddFormComponent', () => {
  let component: AthleteAddFormComponent;
  let fixture: ComponentFixture<AthleteAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
