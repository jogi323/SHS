import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Lazy Loading Modules
//import { HomeModule } from './home/home.module';
//import { AdminModule } from './admin/admin.module';

//Services 
import { AppService } from './app.service';

//Main Routing File
import { routing } from './app-routing.module';

//components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //HomeModule,
    //AdminModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
