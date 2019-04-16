import { Component, OnInit } from '@angular/core';
import { StoryContent } from './story_content';

import { STORY_CONTENTS } from './sample_contents';
import { StoryContentService } from '../story-content.service';

import { STORIES} from './story_list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StoryContentList} from './story_content_list';
import {Observable} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-story-contents',
  templateUrl: './story-contents.component.html',
  styleUrls: ['./story-contents.component.css']
})

export class StoryContentsComponent implements OnInit {
  // storyContents: StoryContentList = this.getStoryContents(STORIES[0]);
  storyContents: StoryContent[] = [];
  selectedContentId = 0;
  currentContent: StoryContent;

  constructor(
    private storyContentService: StoryContentService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getContents();
  }

  getContents(): void {
    this.storyContentService.getContents(0).subscribe(storyContentList =>
      this.setContents(storyContentList.contents));
  }

  setContents(contents: StoryContent[]): void {
    for (const oneContent of contents) {
      if (oneContent.type === 'COVER' || oneContent.type === 'PAGE') {
        this.storyContents.push(oneContent);
        console.log(oneContent);
      }
    }
    // this.storyContents = contents;
    this.currentContent = this.storyContents[this.selectedContentId];
  }

  onGoPrev(): void {
    if (this.selectedContentId > 0) {
      this.selectedContentId -= 1;
      this.currentContent = this.storyContents[this.selectedContentId];
    }
  }

  onGoNext(): void {
    if (this.selectedContentId < this.storyContents.length - 1) {
      this.selectedContentId += 1;
      this.currentContent = this.storyContents[this.selectedContentId];
    }
  }

}
