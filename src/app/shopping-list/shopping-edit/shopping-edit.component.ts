import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  constructor(private sl: ShoppingListService) {}
  @ViewChild('f', {static:false}) slForm:NgForm;

  // @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  // @ViewChild('amountInput', {static:false} ) amountInputRef:ElementRef;

  @Output() ingredientAdded = new EventEmitter<{
    name: string;
    amount: number;
  }>();
  subscription: Subscription;
  editMode: boolean = false;
  editedIndex: number;
  editedItem:Ingredient;

  ngOnInit(): void {
    this.subscription = this.sl.startedEditing.subscribe((index: number) => {
      this.editedIndex = index;
      this.editMode = true;
      this.editedItem = this.sl.getIngredientByIndex(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.editMode ? this.sl.updateIngredient(this.editedIndex,ingredient):this.sl.addIngredient(ingredient); 
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.sl.deleteIngredient(this.editedIndex);
    this.onClear();

  }
}
