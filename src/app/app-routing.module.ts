import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponentComponent } from './item-component/item-component.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  { path: '', component: ItemComponentComponent, children:[
    { path: 'Home', component: PageOneComponent},
    { path: 'Groups', component: PageTwoComponent},
    { path: 'Chat', component: PageThreeComponent},
    { path: 'Delete-Account', component: PageFourComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
