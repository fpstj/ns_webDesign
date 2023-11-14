import { Routes } from '@angular/router';
import { NsWebDesignComponent } from './ns-web-design/ns-web-design.component';

export const routes: Routes = [
    {path: '', component: NsWebDesignComponent},
    {path: 'web-design', component: NsWebDesignComponent}
];
