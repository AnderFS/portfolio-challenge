import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorFotoComponent } from './visor-foto.component';

describe('VisorFotoComponent', () => {
  let component: VisorFotoComponent;
  let fixture: ComponentFixture<VisorFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
