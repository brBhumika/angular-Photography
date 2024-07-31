import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  Username: string = '';
  Password: string = '';
  imgUrl:string="";
  loginAttempts:{username:string,password:string,timestamp:Date}[]=[];


  constructor(private route:Router){}
  OnSubmit() {
    // Handle the form submission logic here
    console.log('Username:', this.Username);
    console.log('Password:', this.Password);
    this.route.navigate(["/album"]);

    this.loginAttempts.push({username:this.Username,password:this.Password,timestamp:new Date()});

    // Perform authentication or other actions
  }

  toRegister(){
    this.route.navigate(["/login"]);
  }

  updateImage():void{
    if(this.Username.trim()==='chaya')
    {
      this.imgUrl='../assets/ape.png'
    }else if(this.Username.trim()=='apeksha')
    {
      this.imgUrl='../assets/ape2.jpg'
    }else{
      this.imgUrl='../assets/default profile.png';
    }

   
  }

  isFormValid():boolean{
    return this.Username.trim()!==""&& this.Password.trim()!="";
  }





}
