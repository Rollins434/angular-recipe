import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
 
   ingredients:Ingredient[];
   private igChangedSub:Subscription
  constructor(private sl:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sl.getIngredient();
   this.igChangedSub =  this.sl.ingredientChanged.subscribe((ingredients : Ingredient[]) =>{
      this.ingredients = ingredients
    })
  }

  ngOnDestroy():void{
    this.igChangedSub.unsubscribe()
  }
  onEditItem(index:number){
    this.sl.startedEditing.next(index);
  }

}
