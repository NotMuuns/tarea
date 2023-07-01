import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallComponent } from './totall.component';

describe('TotallComponent', () => {
  let component: TotallComponent;
  let fixture: ComponentFixture<TotallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotallComponent]
    });
    fixture = TestBed.createComponent(TotallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
