import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuesComponent } from './values.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Values'
    },
    children: [
      {
        path: '',
        redirectTo: 'values'
      },
      {
        path: 'values',
        component: ValuesComponent,
        data: {
          title: 'Values'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ValuesRoutingModule {}
