import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public baseUrl: 'https://localhost:44380/';

  constructor(private http: HttpClient, baseUrl: any) {
    this.baseUrl = baseUrl;
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + 'api/recipes');
  }
}
