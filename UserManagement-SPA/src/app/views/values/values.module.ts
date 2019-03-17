import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesComponent } from './values.component';

// Values Routing
import { ValuesRoutingModule } from './values-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ValuesRoutingModule
  ],
  declarations: [ValuesComponent]
})
export class ValuesModule { }
