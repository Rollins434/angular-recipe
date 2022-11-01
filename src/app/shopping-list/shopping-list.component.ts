import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
   ingredients:Ingredient[];
  constructor(private sl:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sl.getIngredient();
    this.sl.ingredientChanged.subscribe((ingredients : Ingredient[]) =>{
      this.ingredients = ingredients
    })
  }
 

}
