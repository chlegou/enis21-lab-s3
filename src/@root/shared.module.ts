import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
  ]
})
export class SharedModule {
}
