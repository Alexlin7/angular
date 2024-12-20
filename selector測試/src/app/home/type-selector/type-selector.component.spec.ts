import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSelectorComponent } from './type-selector.component';

describe('TypeSelectorComponent', () => {
  let component: TypeSelectorComponent;
  let fixture: ComponentFixture<TypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
