import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinesemovieComponent } from './chinesemovie.component';

describe('ChinesemovieComponent', () => {
  let component: ChinesemovieComponent;
  let fixture: ComponentFixture<ChinesemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChinesemovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinesemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
