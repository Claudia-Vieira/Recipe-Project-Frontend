import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//"Style"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Componentes
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { SearchFormComponent } from './search-form/search-form.component';

//Pages
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavMenuComponent,
    ImageGalleryComponent,
    ReceitasComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
