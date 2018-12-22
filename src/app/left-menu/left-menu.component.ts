import { CommonMethodsService } from './../common-methods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',

  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  static expand = true;

  constructor(private commonService: CommonMethodsService) {
    this.commonService.expandSideBar = this.expandSideBar;
    console.log(this.commonService.expandSideBar);
  }


  ngOnInit() {

  }

  get expand() {
    return LeftMenuComponent.expand;
  }

  public expandSideBar(event) {
    LeftMenuComponent.expand = !LeftMenuComponent.expand;
  }

}
