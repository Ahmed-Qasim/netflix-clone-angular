import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestpageComponent } from './pages/testpage/testpage.component';
import { MyapiservService } from './service/myapiserv.service';
import { FormsModule } from '@angular/forms';
import { NovelsComponent } from './pages/novels/novels.component';
import { MovieComponent } from './pages/movie/movie.component';
import { NovelpageComponent } from './pages/novelpage/novelpage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from './service/authservice.service';
import { AuthInterceptor } from './auth.interceptor';
import { SessionEndedComponent } from './pages/session-ended/session-ended.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    MovieComponent,
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    FooterComponent,
    HeaderComponent,
    SingupComponent,
    LoginComponent,
    IndexComponent,
    ContactUsComponent,
    TestpageComponent,
    NovelsComponent,
    NovelpageComponent,
    MoviepageComponent,
    SessionEndedComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    MovieApiServiceService,
    MyapiservService,
    AuthserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
