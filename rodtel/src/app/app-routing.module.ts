import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AuthComponent } from './auth/auth.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BarComponent } from './food-beverage/bar/bar.component';
import { RestaurantsComponent } from './food-beverage/restaurants/restaurants.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navegation/header/header.component';
import { NavtabsComponent } from './navegation/navtabs/navtabs.component';
import { SidenavListComponent } from './navegation/sidenav-list/sidenav-list.component';


const routes: Routes = [
  {path: 'accommodation', component: AccommodationComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'food-beverage', component: FoodBeverageComponent},
  {path: 'foodAndBeverage', redirectTo: 'food-beverage', pathMatch: 'full'},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'bar', component: BarComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'excursions', component: ExcursionsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'resort-activities', component: ResortActivitiesComponent},
  {path: 'wellness-and-spa', component: WellnessAndSpaComponent},
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'navtabs', component: NavtabsComponent},
  {path: 'sidenav-list', component: SidenavListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
