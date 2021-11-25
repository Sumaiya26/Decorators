import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child10',
  templateUrl: './child10.component.html',
  styleUrls: ['./child10.component.css']
})
export class Child10Component implements OnInit {
  pend:any

  constructor() {
    this.pend = [
      {
        StudentName:"Sumaiya S",
        StudentID:"CSE102",
        Department:"CSE",
        Book_ID_Taken:"1021",
        Due_Pending:"Yes"


      },
      {
        StudentName:"VijayShreeram",
        StudentID:"ECE102",
        Department:"ECE",
        Book_ID_Taken:"1212",
        Due_Pending:"No"


      },
      {
        StudentName:"Bathul R",
        StudentID:"IT102",
        Department:"IT",
        Book_ID_Taken:"1345",
        Due_Pending:"No"


      },

      {
        StudentName:"Arshitha",
        StudentID:"FT102",
        Department:"FT",
        Book_ID_Taken:"454",
        Due_Pending:"Yes"


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"ME",
        Book_ID_Taken:"4532",
        Due_Pending:"No"


      }
    ]

   
   }

  ngOnInit(): void {
  }

}
