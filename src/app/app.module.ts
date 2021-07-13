import { PartOneService } from './shared/services/part-one/part-one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './core/title/title.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/part-one/button/button.component';
import { LabelComponent } from './components/part-one/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [PartOneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
