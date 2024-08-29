import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about/about.component';
import { ContactComponent } from 'src/components/contact/contact/contact.component';
import { HomeComponent } from 'src/components/home/home/home.component';
import { ItemDetailComponent } from 'src/components/itemDetail/item-detail/item-detail.component';
import { ItemListComponent } from 'src/components/itemList/item-list/item-list.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path: '' , component:ItemListComponent},
  {path:'item/:id',component:ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
