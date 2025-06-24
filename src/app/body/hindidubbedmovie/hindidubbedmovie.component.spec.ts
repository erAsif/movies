import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindidubbedmovieComponent } from './hindidubbedmovie.component';

describe('HindidubbedmovieComponent', () => {
  let component: HindidubbedmovieComponent;
  let fixture: ComponentFixture<HindidubbedmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindidubbedmovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindidubbedmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
