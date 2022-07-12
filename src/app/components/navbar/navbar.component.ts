import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  public isLogin=false;
  constructor(public auth: AuthService ,
              private route: Router) { }

  ngOnInit(): void {
  
     this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
      if(isAuthenticated){
        this.route.navigate(['/protegida'])
        this.isLogin=true;  
      }else{
        this.isLogin=false; 
      }
     });

  }

  login(){
    this.auth.loginWithRedirect();
  }

  logout(){
    this.auth.logout();
    
  }
}
