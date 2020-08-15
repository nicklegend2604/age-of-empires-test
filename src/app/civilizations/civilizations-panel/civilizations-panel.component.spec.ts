import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationsPanelComponent } from './civilizations-panel.component';

describe('CivilizationsPanelComponent', () => {
  let component: CivilizationsPanelComponent;
  let fixture: ComponentFixture<CivilizationsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilizationsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
