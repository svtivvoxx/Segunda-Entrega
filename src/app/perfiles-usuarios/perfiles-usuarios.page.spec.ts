import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilesUsuariosPage } from './perfiles-usuarios.page';

describe('PerfilesUsuariosPage', () => {
  let component: PerfilesUsuariosPage;
  let fixture: ComponentFixture<PerfilesUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
