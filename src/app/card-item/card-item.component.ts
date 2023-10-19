import { Component, Input, Output, EventEmitter } from '@angular/core';
interface Price{
  currency:string,
  value:number,
  displayValue:string
}
interface Book{
  ISBN:number,
  title:string,
  author:string,
  summary:string,
  image:string,
  price:Price
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() book:Book|undefined;
  @Output() addToCartEvent = new EventEmitter<Book>();

  addToCart(book:Book){
    this.addToCartEvent.emit(book);
  }
}
