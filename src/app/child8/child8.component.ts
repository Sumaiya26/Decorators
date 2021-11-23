import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.css']
})
export class Child8Component{
@Output() newItemEvent = new EventEmitter<string>();

addNewItem(value: string) {
  this.newItemEvent.emit(value);
}

  

}
