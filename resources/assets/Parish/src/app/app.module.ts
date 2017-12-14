import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { FullLayoutComponent } from './layout/full-layout.component';
import { Ng2AutoBreadCrumb } from 'ng2-auto-breadcrumb';
import { Ng2NewsListComponent } from './components/ng2-newslist/ng2newslist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthGuard } from './auth/not-auth.guard';
import { ProvinceZoneAreaParishService } from './province-zone-area-parish/province-zone-area-parish.service';
import { SharedModule } from './shared/shared.module';
import { ProfileService } from "./profile-details/profile.service";
import { PaymentService } from "./payment-details/payment.service"
import { ReportService } from './report/report.service';
import { WemService } from "./wem-list/wem.service";
import { DashboardService } from "./dashboard/dashboard.service";
import { CsvService } from "./csv-upload/csv.service";


@NgModule( {
	imports: [
		AppRoutingModule,
		BrowserModule,
		CommonModule,
		HttpModule,
		Ng2AutoBreadCrumb,
		SharedModule,
		BrowserAnimationsModule
	],
	declarations: [
		FullLayoutComponent,
		AppComponent
	],
	providers: [
		AuthService,
		AuthGuard,
		NotAuthGuard,
		ProvinceZoneAreaParishService,
		ProfileService,
		PaymentService,
		ReportService,
        WemService,
		DashboardService,
		CsvService
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
