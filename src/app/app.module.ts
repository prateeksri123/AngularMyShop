import { CommonMethodsService } from './common-methods.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    FooterComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommonMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
