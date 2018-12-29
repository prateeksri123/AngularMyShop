import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  public productList = [
    { productName: 'LAWMAN PG3 Stylish & Latest Sneakers Sports & Running Shoes for Men & Boys ', age: 21 },
    { productName: 'Todd', age: 24 },
    { productName: 'Lisa', age: 18 }
  ];

  ngOnInit() {
  }

}
