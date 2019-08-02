import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  array = [{name: 'home', path: 'menu/home'},
           {name: 'about', path: 'menu/about'},
           {name: 'contact', path: 'menu/contact'},
           {name: 'login', path: 'menu/login'}, ];

  constructor() { }

  ngOnInit() {
  }

}
