import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../model/recipes';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
 
 
  public recipes: any;
 

  constructor(private router: Router, private recipeService: RecipeService) {

    
        
    this.recipeService.getRecipes().subscribe(result => {
      this.recipes = result;
    },);
    
  }

  

  navigateToDescription() {

    this.router.navigate(['/recipe-description', this.recipes[0].id]);

  }

  
}

