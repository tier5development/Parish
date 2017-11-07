import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CreateParishComponent } from './create-parish/create-parish.component';
import { ListParishComponent } from './list-parish/list-parish.component';
import { ParishRoutingModule } from './parish-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DpDatePickerModule } from "ng2-date-picker";

@NgModule({
	declarations: [
		CreateParishComponent,
		ListParishComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ParishRoutingModule,
		SharedModule,
		DpDatePickerModule
	],
	providers: []
})
export class ParishModule { }