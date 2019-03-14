import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ViewportComponent } from './viewport/viewport.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TrendingComponent } from './trending/trending.component';
import { GamesComponent } from './games/games.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';


const appRoutes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent, data: {  } },
  { path: 'leaderboard', component: LeaderboardsComponent, data: {  }},
  { path: 'profile', component: ProfileComponent, data: {  },
    children:[
      { path: '', outlet:'playerstats', component: ActivityComponent, pathMatch:'full'},
      { path: 'achievements', component: AchievementsComponent, outlet:"playerstats", data: {  } },
      { path: 'activity', component: ActivityComponent, outlet:'playerstats', data: {  } },
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewportComponent,
    CarouselComponent,
    TrendingComponent,
    GamesComponent,
    ProfileComponent,
    HomeComponent,
    ActivityComponent,
    AchievementsComponent,
    LeaderboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, onSameUrlNavigation: 'reload' } // <-- debugging purposes only
    )
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
