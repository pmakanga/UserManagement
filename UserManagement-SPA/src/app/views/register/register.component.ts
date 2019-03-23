import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration succesful!');
      this.router.navigate(['/login']);
    });
  }

  cancelled() {
    console.log('cancelled');
  }

}
