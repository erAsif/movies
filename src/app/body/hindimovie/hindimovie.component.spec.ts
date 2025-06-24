import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindimovieComponent } from './hindimovie.component';

describe('HindimovieComponent', () => {
  let component: HindimovieComponent;
  let fixture: ComponentFixture<HindimovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindimovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindimovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
