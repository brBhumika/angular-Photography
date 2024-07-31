import { Component, OnInit,Input } from '@angular/core';
import { PhpipePipe } from '../phpipe.pipe';
import { PhserviceService } from '../phservice.service';
interface Photo{
  name:string;
  des:string;
  amt:number;
  ImgUrl:string;
}
@Component({
  selector: 'app-shopcartlist',
  templateUrl: './shopcartlist.component.html',
  styleUrls: ['./shopcartlist.component.css']
})
export class ShopcartlistComponent implements OnInit {
  pic:Photo[]=[];
  @Input() total:number=0;
  constructor(private p:PhserviceService) { }

  ngOnInit(): void {
    // this.pic = [
    //   { name: 'DSLR', amt: 50000 },
    //   { name: 'Nikon', amt: 65000 },
      
    // ];

    // Example logic to calculate total amount
    this.total = this.calTotal(this.pic);


    this.pic=this.p.getSelectedItems()
    this.calTotal
  }

//   

calTotal(items: any[]): number {
  let totalAmt = 0;
  for (let item of items) {
    totalAmt += item.amt;
  }
  return totalAmt;
}

getSwitchCase(): string {
  if (this.total > 50000) {
    return 'MoreThan50000';
  } else if (this.total >= 50000 && this.total <= 200000) {
    return 'between50000and200000';
  } else {
    return 'greaterThan200000';
  }
}



}
