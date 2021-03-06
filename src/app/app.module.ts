import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskComponent } from './list-task/task/task.component';
import { FormsModule } from '@angular/forms';
import { Highlight } from './directives/highlight.directive';
import { BetterHighlight } from './directives/better-highlight.directive';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,
    TaskComponent,
    Highlight,
    BetterHighlight
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [UserService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
