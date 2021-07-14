import { PartOneService } from './shared/services/part-one/part-one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './core/title/title.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponentOne } from './components/part-one/button/button.component';
import { LabelComponentOne } from './components/part-one/label/label.component';
import { ImageComponentTwo } from './components/part-two/image/image.component';
import { ButtonComponentTwo } from './components/part-two/button/button.component';
import { LabelComponentTwo } from './components/part-two/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponentOne,
    ButtonComponentTwo,
    LabelComponentOne,
    LabelComponentTwo,
    ImageComponentTwo
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
