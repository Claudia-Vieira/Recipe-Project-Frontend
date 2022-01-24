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
import { CardsComponent } from './cards/cards.component';

//Pages
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeDescriptionComponent } from './pages/recipe-description/recipe-description.component';
import { RecipeService } from './services/recipe.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HttpClient,
    //components
    SearchFormComponent,
    NavMenuComponent,
    ImageGalleryComponent,
    CardsComponent,
    //pages
    ReceitasComponent,
    HomeComponent,
    NotFoundComponent,
    RecipeDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
