import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('inputName', {static: true}) inputName: ElementRef;
  @ViewChild('inputAmount', {static: true}) inputAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService){
  }

  onAddIngredient(){
    const newIngredient = new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
