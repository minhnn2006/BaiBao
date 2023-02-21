import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private auth:Auth, public authService: AuthService){
  
  }
  new$ = new Observable<News[]>();
  ngOnInit(): void{
    onAuthStateChanged((this.auth), (user)=> {
      if(user) {
        console.log(user)
        this.authService.currentUser = user;
      } else {
        console.log("Bạn cần đăng nhập");
        this.authService.currentUser = null;
      }
    })
  }
   async login(){
    await this.authService.loginWithGoogle();
  }
}
