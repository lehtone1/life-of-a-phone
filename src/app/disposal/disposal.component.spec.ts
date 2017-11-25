import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalComponent } from './disposal.component';

describe('DisposalComponent', () => {
  let component: DisposalComponent;
  let fixture: ComponentFixture<DisposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
