import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {STORIES} from './story-contents/story_list';
import {STORY_CONTENTS} from './story-contents/sample_contents';
import {StoryContentList} from './story-contents/story_content_list';

@Injectable({
  providedIn: 'root'
})

export class StoryContentService {

  constructor(
    private http: HttpClient) { }

  getContents(storyId: number): Observable<StoryContentList> {
    return this.http.get<StoryContentList>(STORIES[storyId]);
    // return of(STORY_CONTENTS);
  }
}
