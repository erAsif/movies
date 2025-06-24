import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { HindimovieComponent } from './body/hindimovie/hindimovie.component';
import { EnglishmovieComponent } from './body/englishmovie/englishmovie.component';
import { SouthmovieComponent } from './body/southmovie/southmovie.component';
import { ChinesemovieComponent } from './body/chinesemovie/chinesemovie.component';
import { HindidubbedmovieComponent } from './body/hindidubbedmovie/hindidubbedmovie.component';
import { AddmovieComponent } from './body/addmovie/addmovie.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  
    {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'home', component: DashboardComponent },
        { path: 'hindimovie', component: HindimovieComponent },
        { path: 'englishmovie', component: EnglishmovieComponent },
        { path: 'southmovie', component: SouthmovieComponent },
        { path: 'chinesemovie', component: ChinesemovieComponent },
        { path: 'hindidubbedmovie', component: HindidubbedmovieComponent },
        { path: 'addmovie', component: AddmovieComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
      ],
    },
  
    { path: '**', redirectTo: 'login' },
  ];