import {Component, OnInit} from '@angular/core';
import { StoryContent } from './story_content';

import { StoryContentService } from './story-content.service';

import { Location } from '@angular/common';
import {MessageService} from '../message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story-contents',
  templateUrl: './story-contents.component.html',
  styleUrls: ['./story-contents.component.css']
})

export class StoryContentsComponent implements OnInit {
  // storyContents: StoryContentList = this.getStoryContents(STORIES[0]);
  mode: string;
  storyContents: StoryContent[] = [];
  selectedStory: number;
  selectedContentId = 0;
  currentContent: StoryContent;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyContentService: StoryContentService,
    private messageService: MessageService) { }

  static isValidContent(content: StoryContent): boolean {
    switch (content.type) {
      case 'COVER':
      case 'PAGE':
      case 'REFLECTION':
      case 'STATEMENT':
      case 'GEOSTORY_SHARING':
        return true;
      default:
        return false;
    }
  }

  ngOnInit() {
    this.mode = this.route.snapshot.paramMap.get('mode');
    this.selectedStory = +this.route.snapshot.paramMap.get('id');
    this.selectedContentId = this.getSelectedContentId();
    this.getContents();
    this.updateLocation();
  }

  getContents(): void {
    this.storyContentService.getContents(this.selectedStory).subscribe(storyContentList =>
      this.setContents(storyContentList.contents));
  }

  setContents(contents: StoryContent[]): void {
    for (const oneContent of contents) {
      if (StoryContentsComponent.isValidContent(oneContent)) {
        this.storyContents.push(oneContent);
      }
    }
    this.currentContent = this.storyContents[this.selectedContentId];
  }

  onGoPrev(): void {
    if (this.selectedContentId > 0) {
      this.selectedContentId -= 1;
      this.currentContent = this.storyContents[this.selectedContentId];
      this.updateLocation();
    }
  }

  onGoNext(): void {
    if (this.selectedContentId < this.storyContents.length - 1) {
      this.selectedContentId += 1;
      this.currentContent = this.storyContents[this.selectedContentId];
      this.updateLocation();
    }
  }

  private updateLocation(): void {
    this.location.replaceState(this.getPath());
  }

  private getPath(): string {
    return '/story/' + this.selectedStory + '/page/' + this.selectedContentId;
  }

  private getSelectedContentId(): number {
    if (this.route.snapshot.paramMap.has('page')) {
      return +this.route.snapshot.paramMap.get('page');
    } else {
      return 0;
    }
  }
}
