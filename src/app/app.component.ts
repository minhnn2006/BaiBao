import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { HttpService } from './service/http.service';
import { Observable } from 'rxjs';

import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HocAngular';
  constructor(private router: Router, private auth:Auth, public authService: AuthService){
    
  }
  like(title: any) {
    console.log("liked",title.name );
  }
  goToCart(){
    this.router.navigate(['cart'])
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  new$ = new Observable<News[]>();
  ngOnInit(): void{
    onAuthStateChanged((this.auth), (user)=> {
      if(user) {
        console.log(user)
        this.authService.currentUser = user;
      } else {
        console.log("Ban chua dang nhap");
        this.authService.currentUser = null;
      }
    })
  }
   async login(){
    await this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}



// wheys = [
//   {
//     id:1,
//     name: "Diesel New Zealand 5lbs",
//     price: "2,200,000 đ",
//     image: "../assets/diesel-whey.jpg",
//     status: "out of stock",
//   },
//   {
//     id:2,
//     name: "Dymatize Iso 100 5lbs",
//     price: "2,150,000 đ",
//     image: "../assets/iso-100.jpg",
//     status: "out of stock",
//   },
//   {
//     id:3,
//     name: "BioTechUSA Hydro Whey Zero 4lbs",
//     price: "2,150,000 đ",
//     image: "../assets/biotech-zero.jpg",
//     status: "out of stock",
//   },
//   {
//     id:4,
//     name: "ON Whey Gold Standard",
//     price: "1,750,000 đ",
//     image: "../assets/on-whey-gold.jpg",
//     status: "out of stock",
//   },
//   {
//     id:5,
//     name: "Leanfit Sport Protein & Collagen 2Kg",
//     price: "2,250,000 đ",
//     image: "../assets/leanfit-whey-collagen.jpg",
//     status: "out of stock",
//   },
//   {
//     id:6,
//     name: "Whey Protein Beyond Isolate 5Lbs",
//     price: "1,750,000 đ",
//     image: "../assets/beyond-whey.jpg",
//     status: "out of stock",
//   },
//   {
//     id:7,
//     name: "Mutant Iso Surge 5lbs",
//     price: "1,950,000 đ",
//     image: "../assets/mutant-iso-surge.jpg",
//     status: "out of stock",
//   },
//   {
//     id:8,
//     name: "ON Platinum HydroWhey 3.5lbs",
//     price: "1,850,000 đ",
//     image: "../assets/on-whey-platinum.jpg",
//     status: "out of stock",
//   },
//   {
//     id:9,
//     name: "Nutrabolics Hydropure 4.5 Lbs",
//     price: "1,890,000 đ",
//     image: "../assets/nutrabolic-whey.jpg",
//     status: "out of stock",
//   },
//   {
//     id:10,
//     name: "Vitaxtrong Iso Pro 5lbs",
//     price: "1,950,000 đ",
//     image: "../assets/iso-pro.jpg",
//     status: "out of stock",
//   },
//   {
//     id:11,
//     name: "IsoTope Redcon1 5lbs",
//     price: "1,800,000 đ",
//     image: "../assets/redcon1-isotope.jpg",
//     status: "out of stock",
//   },
//   {
//     id:12,
//     name: "Scitec Nutrition 100% Hydro Isolate 2Kg",
//     price: "2,730,000 đ",
//     image: "../assets/scitec-whey-green.jpg",
//     status: "out of stock",
//   },
// ]
