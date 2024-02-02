import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    ManageProductComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
