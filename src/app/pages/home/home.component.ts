import { AuthService } from './../../service/auth.service';
import { HttpService } from './../../service/http.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  news = this.httpService.get();
  authService: any;
  constructor(private router: Router, private httpService: HttpService,
    private auth: AuthService ){
    
  }
  CanActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const user = this.authService.userValue;
        if (user) {
            // authorised so return true
            //return true;
            this.router.navigate(['home']);
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login']);
        return false;
  }
  like(title: any) {
    console.log("liked",title.name );
  }
  goToCart(){
    this.router.navigate(['cart']);
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  //new$ = new Observable<News[]>();
  ngOnInit(): void{
    this.news = this.httpService.get();
  }
  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }
}
