import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSummaryComponent } from './dashboard/dashboard-summary/dashboard-summary.component';
import { DashboardDailyComponent } from './dashboard/dashboard-daily/dashboard-daily.component';
import { LoginComponent } from './login/login.component';

import { ApiService, DashboardResolverService, EnergyMetricsService, UserService } from './services';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    resolve: { dashboardData: DashboardResolverService },
    children: [
      { path: 'summary', component: DashboardSummaryComponent },
      { path: 'daily', component: DashboardDailyComponent },
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardSummaryComponent,
    DashboardDailyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
    DashboardResolverService,
    EnergyMetricsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
