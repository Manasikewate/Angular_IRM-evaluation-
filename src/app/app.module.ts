import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveUserComponent } from './components/active-user/active-user.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SummerEmailCompaignComponent } from './summer-email-compaign/summer-email-compaign.component';
import { CheckedTasksComponent } from './checked-tasks/checked-tasks.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    ActiveUserComponent,
    SummerEmailCompaignComponent,
    CheckedTasksComponent,
    CardComponent,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AppModule { }
