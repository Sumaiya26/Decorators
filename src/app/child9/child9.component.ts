import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child9',
  templateUrl: './child9.component.html',
  styleUrls: ['./child9.component.css']
})
export class Child9Component {
  
  
  

  constructor() {}
    details = [
      {
        StudentName:"Sumaiya S",
        StudentID:"CSE102",
        Department:"CSE",
        Book_ID_Taken:"1021",
        Returned:false


      },
      {
        StudentName:"VijayShreeram",
        StudentID:"ECE102",
        Department:      "ECE",
        Book_ID_Taken:"1212",
        Returned:true


      },
      {
        StudentName:"Bathul R",
        StudentID:"IT102",
        Department:"IT",
        Book_ID_Taken:"1345",
        Returned:true


      },

      {
        StudentName:"Arshitha",
        StudentID:"FT102",
        Department:"FT",
        Book_ID_Taken:"454",
        Returned:false


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"ME",
        Book_ID_Taken:"4532",
        Returned:true


      }
    ]

   

    
  

  ngOnInit(): void {
  }

}
