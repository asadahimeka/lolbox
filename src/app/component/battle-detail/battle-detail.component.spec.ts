import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleDetailComponent } from './battle-detail.component';

describe('BattleDetailComponent', () => {
  let component: BattleDetailComponent;
  let fixture: ComponentFixture<BattleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
