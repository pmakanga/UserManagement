import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  model: any;
  constructor(private alertify: AlertifyService, private router: Router,
    public authService: AuthService, @Inject(DOCUMENT) _document?: any ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  // logout and remove the token from the local storage
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out!');
    this.router.navigate(['/login']);
  }

  // for getting the decoded token
  login() {
    this.authService.login(this.model).subscribe(next => {
    });
  }
}


