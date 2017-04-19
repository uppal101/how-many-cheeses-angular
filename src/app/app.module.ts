import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './favorites/header/header.component';
import { FavoritesTableComponent } from './favorites/favorites-table/favorites-table.component';
import { UpdateButtonComponent } from './favorites/update-button/update-button.component';
import { DeleteButtonComponent } from './favorites/delete-button/delete-button.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { SignUpService} from './auth/signup/signup.service';

const appRoutes: Routes = [
  { path: '', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'favorites', canActivate: [AuthGuard], component: FavoritesComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoritesTableComponent,
    UpdateButtonComponent,
    DeleteButtonComponent,
    SignupComponent,
    SigninComponent,
    FavoritesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, SignUpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
