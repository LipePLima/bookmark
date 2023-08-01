import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesItensComponent } from './features-itens.component';

describe('FeaturesItensComponent', () => {
  let component: FeaturesItensComponent;
  let fixture: ComponentFixture<FeaturesItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesItensComponent]
    });
    fixture = TestBed.createComponent(FeaturesItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
