import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { SmoothScrollButtonComponent } from "./smooth-scroll-button/smooth-scroll-button.component";

@NgModule({
  declarations: [AppComponent, SmoothScrollButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
