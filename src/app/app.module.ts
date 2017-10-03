import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ViewsModule } from './views';
import { ServicesModule } from './services';
import { ModulesModule } from './modules';
import { AppComponent } from './app.component';

const defaultRoute = RouterModule.forRoot([{
  path: '**',
  redirectTo: '/departments'
}]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ViewsModule,
    ServicesModule,
    ModulesModule,
    defaultRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
