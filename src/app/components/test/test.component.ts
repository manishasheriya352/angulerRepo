import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('name') name : string;
  @Input('price') price : string;

  constructor() { }

  ngOnInit(): void {
  }

}
