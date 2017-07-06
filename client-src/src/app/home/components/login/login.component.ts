import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:userInterface;
  constructor(private loginService:AppService,private router:Router) {
    this.user = {
      username:'',
      password:''
    }
   }

  ngOnInit() {
  }
login(user){
  console.log(user);
  this.loginService.url = "users/login";
  this.loginService.data = user;
  this.loginService.postService().subscribe(res=>{
    console.log(res['code']);
    if( res['code'] == 1){
      alert('loggedIn');
      this.router.navigate(['admin']);
    }else if( res['code'] == 2){
     alert('wrong password');
     this.router.navigate(['login']);
    }else if( res['code'] == 3){
     alert('Wrong username');
     this.router.navigate(['login']);
    }
  })
}
}
export class userInterface{
  username:String;
  password:String;
}
