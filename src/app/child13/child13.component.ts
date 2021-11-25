import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child13',
  templateUrl: './child13.component.html',
  styleUrls: ['./child13.component.css']
})
export class Child13Component implements OnInit {

  constructor() { }

  issued: any = [
    {
      "Book_ID":"1021 --",
      "Book_Name":"Oliver Twist: ",
      "given":"Returned"



    },

    {
      "Book_ID":"1023 --",
      "Book_Name":"Tom Boy: ",
      "given": "Not Returned"
    },

    {
      "Book_ID":"122 --",
      "Book_Name":"Life Of Phoenix: ",
      "given": "Not Returned"
    },

    {
      "Book_ID":"123 --",
      "Book_Name":"Death Of A city: ",
      "given": "Returned"
    },

    {
      "Book_ID":"142 --",
      "Book_Name":"A better India: ",
      "given": "Not Returned"
    },

    {
      "Book_ID":"1022 --",
      "Book_Name":"Two States: ",
      "given": "Returned"
    },

    {
      "Book_ID":"1022 --",
      "Book_Name":"HarryPotter and the Deadly Hollows: ",
      "given": "Not Returned"
    },

    {
      "Book_ID":"1022 --",
      "Book_Name":"Diary Of Wimphy kId: ",
      "given": "Returned"
    },

    {
      "Book_ID":"675 --",
      "Book_Name":"Alice In Adventureland: ",
      "given": "Not Returned"
    },

    {
      "Book_ID":"991 --",
      "Book_Name":"Emma: ",
      "given": "Returned"
    }
  ]

  ngOnInit(): void {
  }

}
