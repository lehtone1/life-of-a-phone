import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MaterialsComponent } from './materials/materials.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { TransportationComponent } from './transportation/transportation.component';
import { UsageComponent } from './usage/usage.component';
import { DisposalComponent } from './disposal/disposal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RecyclingComponent } from './recycling/recycling.component';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, RoutingComponents } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MaterialsComponent,
    ManufacturingComponent,
    TransportationComponent,
    UsageComponent,
    DisposalComponent,
    FeedbackComponent,
    RecyclingComponent,
    HeadingComponent,
    FooterComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [[{provide: LocationStrategy,
  useClass: HashLocationStrategy}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
