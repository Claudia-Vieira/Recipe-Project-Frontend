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

  /* @Input() recipe: Recipe */
 

  constructor(private router: Router, private recipeService: RecipeService) {

    
  /*   this.recipe = {} as Recipe; */

     
    this.recipeService.getRecipes().subscribe(result => {
      this.recipes = result;
    },);
 
  }
/* 
  navigateToDetails() {

    this.router.navigate(['/recipe-description', this.recipe.Id]);

  } */

  
}

