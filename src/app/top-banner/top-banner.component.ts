import { CommonMethodsService } from './../common-methods.service';
import { LeftMenuComponent } from './../left-menu/left-menu.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})



export class TopBannerComponent implements OnInit {
  storeName = "My Shop";
  leftMenuComponent : LeftMenuComponent = new LeftMenuComponent(this.commonService);
  constructor(private commonService:CommonMethodsService) {}

  ngOnInit() {
    var s:string = "1";
  }

  public expandSideBar(event) {
    console.log("category Clicked " + this.commonService.expandSideBar);
    this.commonService.expandSideBar(event);
    //this.leftMenuComponent.expandSideBar(event);// = !this.leftMenuComponent.expand;
    }

}
