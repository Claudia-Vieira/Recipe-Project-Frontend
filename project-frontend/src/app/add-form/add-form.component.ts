import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

    recipeForm: FormGroup;
    Id?: number;  
    

    get title() { return this.recipeForm.get('title'); }    
    get dificulty() { return this.recipeForm.get('dificulty'); }  
    get duration() { return this.recipeForm.get('duration'); } 
      
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private recipeService: RecipeService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {  
      this.Id = this._avRoute.snapshot.params["id"];  
  }  

  this.recipeForm = this._fb.group({  
      title: ['', [Validators.required]],  
      duration: ['', [Validators.required]],  
      dificulty: ['', [Validators.required]],    
  })  
  }

  ngOnInit(): void {
              
  }

 save(){
   this.recipeService.addRecipe(this.recipeForm.value)  
  .subscribe((data) => {  
      this._router.navigate(['receitas']);  
  })
}

cancel() {  
  this._router.navigate(['receitas']);  
} 

     
  
}
