import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryContentsComponent } from './story-contents/story-contents.component';

const routes: Routes = [
  { path: '', redirectTo: '/story/0', pathMatch: 'full' },
  { path: 'story/:id', component: StoryContentsComponent },
  { path: 'story/:id/page/:page', component: StoryContentsComponent },
  { path: 'story/:id/:mode', component: StoryContentsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
