import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any; // Supposons que l'utilisateur soit stocké ici
  
  constructor(private router: Router) { }
 
  // Fonction pour la déconnexion de l'utilisateur
  logout() {
  
      document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
      localStorage.clear()
      this.router.navigate(['auth/login']);
    
  }
 
  
}
