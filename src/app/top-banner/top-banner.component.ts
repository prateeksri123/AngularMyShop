import { CommonMethodsService } from './../common-methods.service';
import { LeftMenuComponent } from './../left-menu/left-menu.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})



export class TopBannerComponent implements OnInit, AfterViewInit {
  storeName = "My Shop";
  leftMenuComponent: LeftMenuComponent = new LeftMenuComponent(this.commonService);
  constructor(private commonService: CommonMethodsService) { }
  @ViewChild('leftMenu') left: LeftMenuComponent;
  ngOnInit() {
    var s: string = "1";
  }
  ngAfterViewInit() {

  }

  public expandSideBar(event) {

    this.leftMenuComponent.expandSideBar(event);// = !this.leftMenuComponent.expand;
  }

}
