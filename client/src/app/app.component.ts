import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router  } from '@angular/router';
import { tokenGetter } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu: boolean = true;
  clrVerticalNavCollapsed :boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    event.target.innerWidth;
    if (event.target.innerWidth < 992) {
      this.clrVerticalNavCollapsed = true
    }
    else {
      this.clrVerticalNavCollapsed = false
    }
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        if (window.screen.width < 992 && !this.clrVerticalNavCollapsed)  {
          this.clrVerticalNavCollapsed = true
        }
        if (event.url === '/auth/login' ) {
          this.showMenu = false;
        } else {
          if (event.url === '/') {
            if (tokenGetter().length == 0) {
              this.showMenu = false;
              this.router.navigate(['auth/login']);
            }
            else {
              this.showMenu = true;
              this.router.navigate(['dashboard']);
            }
          }
          else {
            this.showMenu = true;
          }
        }
      }
    });
  }

ngOnInit(): void {

  
  
}
}
