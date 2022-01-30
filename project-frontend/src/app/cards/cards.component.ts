import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../model/recipes';
import { RecipeService } from '../services/recipe.service';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
 
 
  public recipes: any;
  public ingredients: any;
 

  constructor(private router: Router, private recipeService: RecipeService, private ingredientService: IngredientService) {
   
    this.recipeService.getRecipes().subscribe(result => {
      this.recipes = result;
    },);

    this.ingredientService.getIngredients().subscribe(result => {
      this.ingredients = result;
    },);
    
  }

  navigateToDescription(Id:number) {

     this.router.navigate(['/recipe-description',Id]);

  }

  
}

