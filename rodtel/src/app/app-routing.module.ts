import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AuthComponent } from './auth/auth.component';
import { OffersComponent } from './offers/offers.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navegation/header/header.component';
import { NavtabsComponent } from './navegation/navtabs/navtabs.component';
import { SidenavListComponent } from './navegation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navegation/footer/footer.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navtabs', component: NavtabsComponent},
  {path: 'sidenav-list', component: SidenavListComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'accommodation', component: AccommodationComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
