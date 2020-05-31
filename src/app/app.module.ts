import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerTestComponent } from './components/server-test/server-test.component';
import { FontTestComponent } from './components/font-test/font-test.component';
import { CheckboxComponent } from './components/shared/checkbox/checkbox.component';
import { AnimatedCubeComponent } from './shared/components/animated-cube/animated-cube.component';
import { AnimatedCheckmarkSvgComponent } from './shared/components/animated-checkmark-svg/animated-checkmark-svg.component';
import { CheckboxSvgComponent } from './shared/components/form-controls/checkbox-svg/checkbox-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerTestComponent,
    FontTestComponent,
    CheckboxComponent
    AnimatedCubeComponent,
    AnimatedCheckmarkSvgComponent,
    CheckboxSvgComponent
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
