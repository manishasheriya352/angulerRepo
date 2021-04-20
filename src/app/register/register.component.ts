import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


@ViewChild('heroForm') heroForm : NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  hero = {name:'',lastName:'',enrollNumber:'',email:'',password:'',cheakbox:'',year:'',Occupation:'',designation:'',OrganizationName:'',mobileNo:'',Location:''};
  onFirstNameChange(){
    console.log(this.hero.name);
  }
  onlastNameChange(){
    console.log(this.hero.lastName);
  }
  onenroLlNumberChange(){
    console.log(this.hero.enrollNumber);
  }
  onEmailChange(){
    console.log(this.hero.email);
  }
  onPasswordChange(){
    console.log(this.hero.password);
  }
  onCheakboxChange(){
    console.log(this.hero.cheakbox);
  }
  onYearChange(){
    console.log(this.hero.year);
  }
  onOccupationChange(){
    console.log(this.hero.Occupation);
  }
  onDesignationChange(){
    console.log(this.hero.designation);
  }
  onOrganizationNameChange(){
    console.log(this.hero.OrganizationName);
  }
  onMbNoChange(){
    console.log(this.hero.mobileNo);
  }
  onLocationChange(){
    console.log(this.hero.Location); 
  }
  onSave(){
   
    if(!this.heroForm.valid){
      this.heroForm.control.markAllAsTouched();
    }
    
    console.log("clicked");
  }
}