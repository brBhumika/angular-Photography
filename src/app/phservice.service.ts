import { Injectable } from '@angular/core';
interface Photo{
  name:string;
  des:string;
  amt:number;
  ImgUrl:string;
}
@Injectable({
  providedIn: 'root'
})
export class PhserviceService {
allphotos:Photo[] = [
  {ImgUrl:"../assets/6.jpg",name:"Digital SLR",des:"Best Suited for Potraits.",amt:50000},
  {ImgUrl:"../assets/7.jpg",name:"Nippon Kogaku K.K",des:"Best for low light photographs.",amt:65000},
];

selectedItems:Photo[] = []

getSelectedItems():Photo[]{
  return this.selectedItems
}

addToSelectedItem(item:Photo):void{
  this.selectedItems.push(item)
}

getAllphotos():Photo[]{
  return this.allphotos
}
  
  constructor() { }
}
