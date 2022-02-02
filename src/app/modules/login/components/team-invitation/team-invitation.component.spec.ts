import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInvitationComponent } from './team-invitation.component';

describe('TeamInvitationComponent', () => {
  let component: TeamInvitationComponent;
  let fixture: ComponentFixture<TeamInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
