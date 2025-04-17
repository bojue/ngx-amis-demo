import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AMISDemoRoutingModule } from './amis-demo/amis-demo.route';
import { HomeComponent } from './home/home.component';
import { configure } from 'mobx';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AMISDemoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {   
    configure({ 
      isolateGlobalState: true }); // 隔离 MobX 状态
  }
 }
