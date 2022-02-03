import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsHeaderComponent } from './boards-header.component';

describe('BoardsHeaderComponent', () => {
  let component: BoardsHeaderComponent;
  let fixture: ComponentFixture<BoardsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
