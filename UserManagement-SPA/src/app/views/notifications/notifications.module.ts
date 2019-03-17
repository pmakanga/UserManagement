// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Notifications Routing
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    AlertModule.forRoot(),
  ],
  declarations: [

  ]
})
export class NotificationsModule { }
