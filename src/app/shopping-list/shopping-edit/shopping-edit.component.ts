import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private sl : ShoppingListService) { }
  @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput', {static:false} ) amountInputRef:ElementRef;

  @Output() ingredientAdded =  new EventEmitter<{name:string,amount:number}>();
  
  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredient  = new Ingredient(name,amount);
    this.sl.addIngredient(ingredient)
    

  }
}
