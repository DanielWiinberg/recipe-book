import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('inputName', {static: true}) inputName: ElementRef;
  @ViewChild('inputAmount', {static: true}) inputAmount: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredient(){
    const newIngredient = new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }

}
