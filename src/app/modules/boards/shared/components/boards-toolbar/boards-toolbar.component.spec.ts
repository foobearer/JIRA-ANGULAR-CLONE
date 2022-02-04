import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsToolbarComponent } from './boards-toolbar.component';

describe('BoardsToolbarComponent', () => {
  let component: BoardsToolbarComponent;
  let fixture: ComponentFixture<BoardsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
