import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnOnchangeHookComponent } from './gn-onchange-hook.component';

describe('GnOnchangeHookComponent', () => {
  let component: GnOnchangeHookComponent;
  let fixture: ComponentFixture<GnOnchangeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GnOnchangeHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GnOnchangeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
