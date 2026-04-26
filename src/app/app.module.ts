import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './features/users/users.component';
import { UserComponent } from './features/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ProductsComponent } from './features/products/products.component';
import { StoreModule } from '@ngrx/store';
import { UppercaseDirective } from './directives/uppercase.directive';
import { CounterComponent } from './features/counter/counter.component';
import { countReducer } from './store/user/user.reducer';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ProductsComponent,
    UppercaseDirective,
    CounterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
    ScrollingModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    StoreModule.forRoot({count : countReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
