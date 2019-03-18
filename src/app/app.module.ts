import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ModalComponent } from './modal/modal.component';
import { MatchComponent } from './match/match.component';
import { AdminComponent } from './admin/admin.component';
import { MUsersComponent } from './m-users/m-users.component';
import { MMatchesComponent } from './m-matches/m-matches.component';
import { MGamesComponent } from './m-games/m-games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { FormsModule } from '@angular/forms';
import { DeleteGamesComponent } from './delete-games/delete-games.component';
import { AddMatchesComponent } from './add-matches/add-matches.component';
import { DeleteMatchesComponent } from './delete-matches/delete-matches.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent, data: {  } },
  { path: 'admin', component: AdminLoginComponent, data: {  }, },
  { path: 'admin/manage', component: AdminComponent, data: {  },
    children: [
      { path: '', outlet:'admin', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent, outlet:'admin', data: {  } },
      { path: 'users', component: MUsersComponent, outlet:'admin', data: {  } },
      { path: 'games', component: MGamesComponent, outlet:'admin', data: {  },
        children: [
          { path: '', outlet:'games', component: AddGamesComponent },
          { path: 'add', component: AddGamesComponent, outlet:'games', data: {  } },
          { path: 'update', component: AddGamesComponent, outlet:'games', data: {  } },
          { path: 'delete', component: DeleteGamesComponent, outlet:'games', data: {  } },
        ]},
      { path: 'matches', component: MMatchesComponent, outlet:'admin', data: {  },
        children:[
          { path: '', outlet:'matches', component: AddMatchesComponent },
          { path: 'add', component: AddMatchesComponent, outlet:'matches', data: {  } },
          { path: 'update', component: AddGamesComponent, outlet:'macthes', data: {  } },
          { path: 'delete', component: DeleteMatchesComponent, outlet:'matches', data: {  } },
        ]},
    ]},
  { path: 'games', component: GamesComponent, data: {  } },
  { path: 'matches', component: TrendingComponent, data: {  } },
  { path: 'leaderboard', component: LeaderboardsComponent, data: {  }},
  { path: 'match', redirectTo:'home', pathMatch:'full'},
  { path: 'match/:id', component: MatchComponent, data: {  }},
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
    LeaderboardsComponent,
    ModalComponent,
    MatchComponent,
    AdminComponent,
    MUsersComponent,
    MMatchesComponent,
    MGamesComponent,
    DashboardComponent,
    AddGamesComponent,
    DeleteGamesComponent,
    AddMatchesComponent,
    DeleteMatchesComponent,
    AdminLoginComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
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
