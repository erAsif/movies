import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthmovieComponent } from './southmovie.component';

describe('SouthmovieComponent', () => {
  let component: SouthmovieComponent;
  let fixture: ComponentFixture<SouthmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouthmovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
