import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]
  constructor(private recipe:RecipeService,
    private route:ActivatedRoute, 
    private router:Router) { }
  console = console;


  ngOnInit(): void {
    this.recipes = this.recipe.getRecipe()
  }

  openNewRecipe(){
  
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
