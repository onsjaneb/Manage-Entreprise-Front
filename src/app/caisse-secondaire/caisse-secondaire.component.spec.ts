import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseSecondaireComponent } from './caisse-secondaire.component';

describe('CaisseSecondaireComponent', () => {
  let component: CaisseSecondaireComponent;
  let fixture: ComponentFixture<CaisseSecondaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaisseSecondaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaisseSecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
