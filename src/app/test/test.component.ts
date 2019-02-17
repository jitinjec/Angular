import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData ;

  @Output() public childEvent = new EventEmitter();
  constructor() { }
 
   public name = "john"
   public message ="Welcome to Angular 6 Lab";
   public person = {
     name : 'John',
     lastName : 'Deo'
   };

   public date = new Date();

  ngOnInit() {
  }
  emitData() {
    this.childEvent.emit("child data");
  }

}
