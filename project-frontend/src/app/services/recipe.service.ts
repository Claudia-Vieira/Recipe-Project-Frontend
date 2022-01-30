import { Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipes';


@Injectable()
export class RecipeService {

  private baseUrl = 'https://localhost:44380/';

  constructor(private http: HttpClient,) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + 'api/recipes');
  }

  getRecipeById(Id:number): Observable<Recipe>{
    return this.http.get<Recipe>(this.baseUrl + `api/recipes/${Id}`)
  }
}