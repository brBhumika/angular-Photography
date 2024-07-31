import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { PhserviceService } from '../phservice.service';
import { ShopcartlistComponent } from '../shopcartlist/shopcartlist.component';
interface Photo{
  name:string;
  des:string;
  amt:number;
  ImgUrl:string;
}

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  // @Output() addTocart=new EventEmitter<Product>();
  // products:Product[]=[
  //   {
  //     name:'Tv',price:25000},
  //     {name:'Fridge',price:43000}
   
  // ];
  //onAddtoCart(product:Product)
  // {
  //   this.addTocart.emit(product);
  // }
  public pic:Photo[] = [];
  total:number=0;
  constructor(private p:PhserviceService) { }

  ngOnInit(): void {
    this.pic=this.p.getAllphotos();
    console.log(this.pic)
  }

  addToCart(item:Photo):void{
    this.total += item.amt;
    this.p.addToSelectedItem(item)
  }

}
