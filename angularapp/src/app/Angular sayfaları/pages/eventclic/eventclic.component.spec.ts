import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventclicComponent } from './eventclic.component';

describe('EventclicComponent', () => {
  let component: EventclicComponent;
  let fixture: ComponentFixture<EventclicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventclicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventclicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
