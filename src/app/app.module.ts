import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { DietsComponent } from './components/diets/diets.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { MeatsComponent } from './components/meats/meats.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { VeggiesComponent } from './components/veggies/veggies.component';
import { VitaminsComponent } from './components/vitamins/vitamins.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    DietsComponent,
    FruitsComponent,
    MeatsComponent,
    RecipesComponent,
    VeggiesComponent,
    VitaminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
