import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isNavOpen : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('news') news : ElementRef;
  closeNav(){
    this.isNavOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("div-aline").style.marginLeft= "-136px";
  }
  openNav(){
    this.isNavOpen = true;
    document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("div-aline").style.marginLeft = "225px";
  }

}
