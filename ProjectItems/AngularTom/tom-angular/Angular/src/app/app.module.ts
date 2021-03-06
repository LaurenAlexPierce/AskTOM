import { TomService } from './services/tom.service';
import { ResponseComponent } from './components/response/response.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from './routes';
import { BrowserModule } from 'node_modules/@angular/platform-browser';
import { NgModule } from 'node_modules/@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from 'node_modules/@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterTomService } from './services/register-tom.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResponseComponent,
    TopicListComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [TomService,RegisterTomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
