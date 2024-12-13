import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClasComponent } from './ng-clas.component';

describe('NgClasComponent', () => {
  let component: NgClasComponent;
  let fixture: ComponentFixture<NgClasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgClasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
