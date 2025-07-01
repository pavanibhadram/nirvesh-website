import { Routes } from '@angular/router';
import { WhyUsComponent } from '../why-us/why-us.component';
import { OurVisionComponent } from '../our-vision/our-vision.component';
import { ValuesComponent } from '../values/values.component';
import { ProductComponent } from '../product/product.component';
import { OutLookComponent } from '../out-look/out-look.component';

export const WhyUsComponentRoutes: Routes = [
  {
    path: '',
    component: WhyUsComponent,
    pathMatch: 'full',
  },
  { path: 'our-vision', component: OurVisionComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'out-look', component: OutLookComponent },
];
