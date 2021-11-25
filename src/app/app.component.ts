import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:String[] = []
  stuname:String = "";
  enterdate = ""
  CountOfBooks:number = 0
  enterfrstname =  "";
  
  enterdeptname = "";
  parentprop = "";
  parent2prop = "";
  parent3prop:number = 0
  parent4prop = "";
  enterdateReturn = "";
  parent5prop = "";
  

  TransferData(){
    this.parent2prop = this.enterfrstname;
    this.parentprop = this.enterdeptname;
    
    this.parent4prop = this.enterdate;
    this.parent5prop = this.enterdateReturn;
    this.parent3prop = this.CountOfBooks++

  }

  name(stuname:String):void{
    this.stuname = stuname;
    
    alert("The ID that has returned the book is:   "+stuname);
  }
  
  student(){
    alert("Sucessfully Logged Out");
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }









  

  
     
   
    
    
  


  
}
