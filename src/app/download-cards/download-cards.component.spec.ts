import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCardsComponent } from './download-cards.component';

describe('DownloadCardsComponent', () => {
  let component: DownloadCardsComponent;
  let fixture: ComponentFixture<DownloadCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadCardsComponent]
    });
    fixture = TestBed.createComponent(DownloadCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
