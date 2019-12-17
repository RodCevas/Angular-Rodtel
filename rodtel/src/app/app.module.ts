import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantsComponent } from './food-beverage/restaurants/restaurants.component';
import { BarComponent } from './food-beverage/bar/bar.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navegation/header/header.component';
import { SidenavListComponent } from './navegation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navegation/navtabs/navtabs.component';
import { FlexLayoutModule } from '@Angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    RestaurantsComponent,
    BarComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
