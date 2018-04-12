import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFotosComponent } from './listar-fotos.component';

describe('ListarFotosComponent', () => {
  let component: ListarFotosComponent;
  let fixture: ComponentFixture<ListarFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
