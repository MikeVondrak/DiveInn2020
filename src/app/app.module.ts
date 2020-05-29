import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerTestComponent } from './components/server-test/server-test.component';
import { FontTestComponent } from './components/font-test/font-test.component';
import { CheckboxComponent } from './components/shared/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerTestComponent,
    FontTestComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
