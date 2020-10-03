import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleShowComponent } from './toggle-show.component';

describe('ToggleShowComponent', () => {
  let component: ToggleShowComponent;
  let fixture: ComponentFixture<ToggleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
