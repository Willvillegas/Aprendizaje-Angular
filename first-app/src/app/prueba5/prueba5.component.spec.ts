import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba5Component } from './prueba5.component';

describe('Prueba5Component', () => {
  let component: Prueba5Component;
  let fixture: ComponentFixture<Prueba5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prueba5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueba5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
