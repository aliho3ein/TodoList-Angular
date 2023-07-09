import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** */
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
// import { MatTabGroup } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [AppComponent, TodoCardComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    // MatTabGroup,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
