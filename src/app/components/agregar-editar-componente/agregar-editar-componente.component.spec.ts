import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarComponenteComponent } from './agregar-editar-componente.component';

describe('AgregarEditarComponenteComponent', () => {
  let component: AgregarEditarComponenteComponent;
  let fixture: ComponentFixture<AgregarEditarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
