import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule, BsDropdownModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
