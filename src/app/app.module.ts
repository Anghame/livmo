import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Views/nav-menu/nav-menu.component';
import { HomeComponent } from './Views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Views/footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import { HostProfileComponent } from './Views/host-profile/host-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    HostProfileComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    RadioButtonModule,
    KeyFilterModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [
    //  { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    /* {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
  }*/
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}