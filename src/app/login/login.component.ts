import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('heroForm')heroform :NgForm;
  constructor() { }
  onSave() { 
    if(!this.heroform.valid){
      this.heroform.control.markAllAsTouched();
    }
  }
  ngOnInit(): void {
  }

}
