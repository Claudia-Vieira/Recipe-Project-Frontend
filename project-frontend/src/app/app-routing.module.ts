import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeDescriptionComponent } from './pages/recipe-description/recipe-description.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path:'receitas', component: ReceitasComponent},
  {path:'recipe-description', component:RecipeDescriptionComponent},
  {path:'**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
