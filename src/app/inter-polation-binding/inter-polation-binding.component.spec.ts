import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterPolationBindingComponent } from './inter-polation-binding.component';

describe('InterPolationBindingComponent', () => {
  let component: InterPolationBindingComponent;
  let fixture: ComponentFixture<InterPolationBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterPolationBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterPolationBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
