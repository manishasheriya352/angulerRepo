import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PostComponent } from './post/post.component';
import { MainPostComponent } from './main-post/main-post.component';
import { FilesComponent } from './files/files.component';
import { MyPostComponent } from './my-post/my-post.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainNewsComponent } from './main-news/main-news.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FoodItemComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewsComponent,
    PostComponent,
    MainPostComponent,
    FilesComponent,
    MyPostComponent,
    MainNewsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
/*   constructor(private library: FaIconLibrary) {
    library.addIcons(faAngleDoubleDown);
   }
 */
}
