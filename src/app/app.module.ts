import { CommonMethodsService } from './common-methods.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    FooterComponent,
    LeftMenuComponent,
    MainPageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommonMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
