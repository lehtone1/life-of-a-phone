import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MaterialsComponent } from './materials/materials.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { TransportationComponent } from './transportation/transportation.component';
import { UsageComponent } from './usage/usage.component';
import { DisposalComponent } from './disposal/disposal.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MaterialsComponent,
    ManufacturingComponent,
    TransportationComponent,
    UsageComponent,
    DisposalComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
