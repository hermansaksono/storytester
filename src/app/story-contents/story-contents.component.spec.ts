import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryContentsComponent } from './story-contents.component';

describe('StoryContentsComponent', () => {
  let component: StoryContentsComponent;
  let fixture: ComponentFixture<StoryContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
