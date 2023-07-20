import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { NovelsComponent } from './pages/novels/novels.component';
import { SingupComponent } from './pages/singup/singup.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { NovelpageComponent } from './pages/novelpage/novelpage.component';
import { AuthGuard } from './auth.guard';
import { SessionEndedComponent } from './pages/session-ended/session-ended.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'search', component: SearchComponent,canActivate: [AuthGuard] },
  { path: 'sign-in', component:LoginComponent},
  { path: 'sign-up', component:SingupComponent},
  { path: 'sign-up', component:SingupComponent},
  { path: 'SessEnded', component:SessionEndedComponent},
  { path: 'AboutUs', component:AboutUsComponent},
  //{ path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'novel', component:NovelsComponent,canActivate: [AuthGuard] },
  {path:'index/login',component:LoginComponent},
  {path:'index/signup',component:SingupComponent},
  {path:'index',component:IndexComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'movies',component:MovieComponent,canActivate: [AuthGuard]},
  // {path:'about',component:AboutUsComponent},
  // {path:'chooseYourplan',component:ChooseYourPlanComponent},
  {path:'moviepage/:id',component:MoviepageComponent,canActivate: [AuthGuard]},
  {path:'novelpage/:id',component:NovelpageComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
