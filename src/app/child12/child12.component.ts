import { Component, OnInit,Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child12',
  templateUrl: './child12.component.html',
  styleUrls: ['./child12.component.css']
})
export class Child12Component {

  booksname:any = [
    "1.	A Better India: A Better World	Narayana Murthy",
    "2.	A Passage to India:	E.M. Foster",
    "3.	A Revenue Stamp:	Amrita Pritam",
    "4.	Death of a City:	Amrita Pritam",
    "5.	Pinjar	Amrita: Pritam",
    "6.	A Suitable Boy:	Vikram Seth",
    "7.	A Tale of Two Cities:	Charles Darwin",
    "8.	David Copperfield:	Charles Darwin",
    "9.	Oliver Twist",
    "10. Two States"
  ]
  





  ngOnInit(): void {
  }

}
