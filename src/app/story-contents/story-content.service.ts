import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {STORIES} from './story_list';
import {STORY_CONTENTS} from './sample_contents';
import {StoryContentList} from './story_content_list';

@Injectable({
  providedIn: 'root'
})

export class StoryContentService {

  constructor(
    private http: HttpClient) { }

  getContents(storyId: number): Observable<StoryContentList> {
    console.log(storyId)
    return this.http.get<StoryContentList>(STORIES[storyId]);
    // return of(STORY_CONTENTS);
  }
}
