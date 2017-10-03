import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

 private menuList: [
    {
      name: string;
      price: string;
    }
  ];
  constructor() {
    this.menuList = [
      {
        name: 'Pizza',
        price: '$16.99'
      },
      {
        name: 'Chicken',
        price: '$17.99'
      },
      {
        name: 'Pasta',
        price: '$12.99'
      },
      {
        name: 'Vegetarian',
        price: '$10.99'
      }
    ];
  }

  ngOnInit() {}
}
