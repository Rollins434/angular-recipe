import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 5),
  ];
  getIngredient() {
    return this.ingredients.slice();
  }
  getIngredientByIndex(index:number){
    return this.ingredients[index];
  }
  

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanged.next(this.ingredients.slice())
  }
  addMoreIngredient(ings:Ingredient[]){
    this.ingredients.push(...ings)
    this.ingredientChanged.next(this.ingredients.slice())
  }
  updateIngredient(index:number,newingredient:Ingredient){
    this.ingredients[index] = newingredient;
    this.ingredientChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number){
    
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
