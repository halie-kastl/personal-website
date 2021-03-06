import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NexspringComponent } from "./nexspring/nexspring.component";
import { SlalomComponent } from "./slalom/slalom.component";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [AppComponent, NexspringComponent, SlalomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
