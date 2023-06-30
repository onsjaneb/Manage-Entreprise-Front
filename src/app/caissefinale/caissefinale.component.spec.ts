import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissefinaleComponent } from './caissefinale.component';

describe('CaissefinaleComponent', () => {
  let component: CaissefinaleComponent;
  let fixture: ComponentFixture<CaissefinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaissefinaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaissefinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
