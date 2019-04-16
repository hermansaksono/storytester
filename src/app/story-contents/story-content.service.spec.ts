import { TestBed } from '@angular/core/testing';

import { StoryContentService } from './story-content.service';

describe('StoryContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryContentService = TestBed.get(StoryContentService);
    expect(service).toBeTruthy();
  });
});
