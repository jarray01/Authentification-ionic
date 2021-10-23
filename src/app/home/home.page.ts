import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
public contact = {
  name : "ISET",
  email : "iset@gmail.com",
  tel : "0021675000000",
  logo : "assets/images/logo-iset.png",
  location : "assets/images/loc.png"
}
  constructor() { }

  ngOnInit() {
  }

}
