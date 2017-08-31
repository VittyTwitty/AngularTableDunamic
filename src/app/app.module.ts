import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodService } from './services/users.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ROUTES } from './app.routing';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderAsideComponent } from './order-aside/order-aside.component';
import { OrderAsideItemComponent } from './order-aside-item/order-aside-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OrderListComponent,
    OrderItemComponent,
    OrderAsideComponent,
    OrderAsideItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
