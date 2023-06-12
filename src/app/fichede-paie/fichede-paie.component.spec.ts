import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichedePaieComponent } from './fichede-paie.component';

describe('FichedePaieComponent', () => {
  let component: FichedePaieComponent;
  let fixture: ComponentFixture<FichedePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichedePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichedePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
