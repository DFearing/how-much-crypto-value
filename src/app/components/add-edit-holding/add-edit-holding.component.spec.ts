import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoHoldingComponent } from './crypto-holding.component';

describe('CryptoHoldingComponent', () => {
  let component: CryptoHoldingComponent;
  let fixture: ComponentFixture<CryptoHoldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoHoldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoHoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
