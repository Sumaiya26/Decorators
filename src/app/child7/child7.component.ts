import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {

@Output() GetStudentDetails = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }



  Details(){
  this.GetStudentDetails.emit();
 }


}
