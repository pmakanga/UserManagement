import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration succesfull!');
      this.router.navigate(['/login']);
    }, error => {
      this.alertify.error(error);
    });
  }

  cancelled() {
    console.log('cancelled');
  }

}
