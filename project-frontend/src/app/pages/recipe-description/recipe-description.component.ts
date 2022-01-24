import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent implements OnInit {

  
 /*  public recipes: any;

  constructor(private router: Router, private recipeService: RecipeService) {
    this.recipeService.getRecipes().subscribe(result => {
      this.recipes = result;
    }, error => console.error(error));
  } */

  
  public faClock = faClock;
  public faTachometerAlt = faTachometerAlt;

  
  
  public title: string = "Receita";
  public imageUrl:string = "/assets/baba-camelo.jpg";
  public duration:number = 30;
  public dificulty:string = "Fácil";


  constructor() { }
  ngOnInit(): void {
  } 
  
 

  public ingredients = [
    {id:'1', name:'leite condensado cozido'},
    {id:'2', name: 'ovos'},
    {id:'3', name: 'amêndoa torrada'},
]

public steps = [
  {id:'1', description:'Comece por separar as gemas das claras.'},
  {id:'2', description: 'Numa tigela, deite o leite condensado cozido e as gemas e bata bem, até obter uma mistura homogénea.'},
  {id:'3', description: 'Noutro recipiente, bata as claras em castelo.'},
  {id:'4', description: 'Junte-as ao preparado anterior, envolvendo cuidadosamente.'},
  {id:'5', description: 'Leve a baba de camelo ao frio e sirva decorado com a amêndoa torrada laminada.'},
]


}
