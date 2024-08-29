import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from 'src/components/leftComponent/left/left.component';
import { MiddleComponent } from 'src/components/middleComponent/middle/middle.component';
import { RightComponent } from 'src/components/rightComponent/right/right.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from 'src/components/about/about/about.component';
import { HomeComponent } from 'src/components/home/home/home.component';
import { ContactComponent } from 'src/components/contact/contact/contact.component';
import { ItemDetailComponent } from 'src/components/itemDetail/item-detail/item-detail.component';
import { ItemListComponent } from 'src/components/itemList/item-list/item-list.component';
import { CounterService } from 'src/service/counter.service';
import { ParentComponent } from 'src/components/parent/parent/parent.component';
import { ChildComponent } from 'src/components/child/child/child.component';
import { PipesComponent } from 'src/components/pipes/pipes/pipes.component';
import { SqrtPipe } from 'src/customPipes/sqrt.pipe';
import { ShortenPipe } from 'src/customPipes/shorten.pipe';
import { DataService } from 'src/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ItemDetailComponent,
    ItemListComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent,
    PipesComponent,
    SqrtPipe,
    ShortenPipe,
    ProductsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CounterService,DataService],
  bootstrap: [AppComponent]

})

export class AppModule { }
