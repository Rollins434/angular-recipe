import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]
  constructor(private recipe:RecipeService) { }
  console = console;


  ngOnInit(): void {
    this.recipes = this.recipe.getRecipe()
  }

}
