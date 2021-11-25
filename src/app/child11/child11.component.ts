import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.css']
})
export class Child11Component implements OnInit {
dept:any
  constructor() { 
    this.dept = [
      {
        StudentName:"Sumaiya S",
        StudentID:"CSE102",
        Department:"CSE",
        


      },
      {
        StudentName:"VijayShreeram",
        StudentID:"ECE102",
        Department:"ECE",
        


      },
      {
        StudentName:"Bathul R",
        StudentID:"IT102",
        Department:"IT",
        


      },

      {
        StudentName:"Arshitha",
        StudentID:"FT102",
        Department:"IT",
        


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"ECE",
        


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"IT",
        


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"CSE",
        


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"ECE",
        


      },

      {
        StudentName:"Rahul M",
        StudentID:"ME102",
        Department:"ECE",
        


      }
    ]
  }

  ngOnInit(): void {
  }

}
