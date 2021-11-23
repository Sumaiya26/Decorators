import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {
@Output() nameEvent = new EventEmitter();

stuname:String = "";




  constructor() { }

  ngOnInit(): void {
  }

  callParentName(){
    
    

    this.nameEvent.emit(this.stuname);
  }

  

  


    
  



  
}
