import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsSidebarComponent } from './boards-sidebar.component';

describe('BoardsSidebarComponent', () => {
  let component: BoardsSidebarComponent;
  let fixture: ComponentFixture<BoardsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
