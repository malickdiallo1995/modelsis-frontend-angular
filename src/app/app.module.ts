import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { TypeComponent } from './type/type.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductAddComponent } from './product-add/product-add.component';
import {MatSelectModule} from '@angular/material/select';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TypeComponent,
    HeaderComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
