import { Component, OnInit } from '@angular/core';
interface Photo{
  name:string;
  des:string;
  amt:number;
  ImgUrl:string;
}

@Component({
  selector: 'app-shopparent',
  templateUrl: './shopparent.component.html',
  styleUrls: ['./shopparent.component.css']
})
export class ShopparentComponent implements OnInit {
  pic:Photo[]=[];

  // handleTocart(product:Photo)
  // {
  //   this.pic.push(product);
    
  // }
  constructor() { }

  ngOnInit(): void {
  }


}
