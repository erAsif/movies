import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishmovieComponent } from './englishmovie.component';

describe('EnglishmovieComponent', () => {
  let component: EnglishmovieComponent;
  let fixture: ComponentFixture<EnglishmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishmovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
