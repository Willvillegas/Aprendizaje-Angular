import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba4Component } from './prueba4.component';

describe('Prueba4Component', () => {
  let component: Prueba4Component;
  let fixture: ComponentFixture<Prueba4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prueba4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueba4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
