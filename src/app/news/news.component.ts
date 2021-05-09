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
  /* @ViewChild('news') news : ElementRef; */
  closeNav(){
    this.isNavOpen = false;
    document.getElementById("mySidenav").style.width = "0";
   // document.getElementById("span-id-2").style.marginLeft= "0";
  }
  openNav(){
    this.isNavOpen = true;
    document.getElementById("mySidenav").style.width = "35%";
 /*  document.getElementsByClassName("span-design")[0].style.marginLeft = "0"; */
/*       document.getElementById("span-id").style.marginLeft = "425px"; */
 
  }
  toggleNav(){
  
   
    if(this.isNavOpen){
      this.isNavOpen = false;
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("span-id").style.marginLeft = "0";
    }else{
      document.getElementById("span-id").style.marginLeft = "420px";
      this.isNavOpen = true;
      document.getElementById("mySidenav").style.width = "35%";
    }
  }

}
