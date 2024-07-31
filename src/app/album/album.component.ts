import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  toRegister(){
    this.route.navigate(["/shopparent"]);
  }



}
