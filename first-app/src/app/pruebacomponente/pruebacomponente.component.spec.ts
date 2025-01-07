import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacomponenteComponent } from './pruebacomponente.component';

describe('PruebacomponenteComponent', () => {
  let component: PruebacomponenteComponent;
  let fixture: ComponentFixture<PruebacomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebacomponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebacomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
