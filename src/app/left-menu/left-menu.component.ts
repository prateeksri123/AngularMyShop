import { CommonMethodsService } from './../common-methods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  expand = true;

  constructor(private commonService:CommonMethodsService) {
    this.commonService.expandSideBar = this.expandSideBar;
    console.log(this.commonService.expandSideBar);
  }


  ngOnInit() {
    
  }

  public expandSideBar(event) {
    //alert("Clicked before " + this.expand);
  this.expand = !this.expand;
  //this.commonService.expandSideBarFlag = !this.commonService.expandSideBarFlag;
  //this.expand = this.commonService.expandSideBarFlag;
  alert(" expand flag" + this.expand);
  }

}
