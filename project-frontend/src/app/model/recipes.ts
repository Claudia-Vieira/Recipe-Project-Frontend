import { Ingredient } from "./ingredients";

export interface Recipe {
    Id: number;
    title: string;
    imageUrl: string;
    duration:number;
    dificulty:string;
    ingredients?: Ingredient[];
    steps: string;
    
  }