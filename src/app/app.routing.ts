import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from "./intro/intro.component";
import { MaterialsComponent } from './materials/materials.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { TransportationComponent } from './transportation/transportation.component';
import { UsageComponent } from './usage/usage.component'
import { RecyclingComponent } from './recycling/recycling.component'
import { FeedbackComponent } from './feedback/feedback.component'


const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'manufacturing', component: ManufacturingComponent},
  { path: 'transportation', component: TransportationComponent},
  { path: 'usage', component: UsageComponent},
  { path: 'recycling', component: RecyclingComponent},
  { path: 'feedback', component: FeedbackComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const RoutingComponents = [IntroComponent, MaterialsComponent, ManufacturingComponent, TransportationComponent, UsageComponent, RecyclingComponent, FeedbackComponent];

