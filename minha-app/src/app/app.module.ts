import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToggleShowComponent } from './toggle-show/toggle-show.component';
import { RatingComponent } from './rating/rating.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ToDoListComponent,
    ToggleShowComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
