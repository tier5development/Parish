import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UploadPaymentComponent } from "./upload-payment/upload-payment.component";

const paymentRoutes: Routes = [
	{ path: 'upload', component: UploadPaymentComponent},
];
@NgModule({
	imports: [ RouterModule.forChild(paymentRoutes) ],
	exports: [ RouterModule ]
})
export class PaymentRoutingModule { }