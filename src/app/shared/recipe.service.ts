import { Injectable } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";
import { ShoppingListService } from "./shoppinglist.service";

@Injectable()
export class RecipeService {

    
  recipeSelected = new Subject<Recipe>();
  constructor(private slService:ShoppingListService) {}
 
    private recipes:Recipe[] = [
        new Recipe('A test recipe','This is a test','https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg',[
          new Ingredient('Meat' ,2),
          new Ingredient('French Fries' ,20)
        ]),
        new Recipe('Another test recipe','Description here','https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg',[
          new Ingredient('Meat' ,2),
          new Ingredient('French Fries' ,20)
        ])
          ];

          getRecipe(){
            return this.recipes.slice()
          }
          addIngredientsToShoppingList = (ingredients : Ingredient[]) => {
            this.slService.addMoreIngredient(ingredients)
          }

          getRecipeById(id:number){
            return this.recipes[id]
          }


}