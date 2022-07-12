import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  
})
export class ProtegidaComponent implements OnInit {

  profileJson:string="";

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
        profile =>  this.profileJson = JSON.stringify(profile, null,2)
    )
  }

}
