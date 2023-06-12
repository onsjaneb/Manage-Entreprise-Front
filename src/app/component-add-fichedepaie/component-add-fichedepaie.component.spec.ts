import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAddFichedepaieComponent } from './component-add-fichedepaie.component';

describe('ComponentAddFichedepaieComponent', () => {
  let component: ComponentAddFichedepaieComponent;
  let fixture: ComponentFixture<ComponentAddFichedepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAddFichedepaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAddFichedepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
