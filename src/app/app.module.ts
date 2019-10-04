import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NiceFooterComponent } from './nice-footer/nice-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    NiceFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
