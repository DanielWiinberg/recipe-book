import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  savedRecipes: Recipe[] = [
    new Recipe('Pasta Carbonara', 
    'Pasta with bacon and cheese', 
    'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1558_1_1436795948.jpg?tr=w-800,h-1066'
    ),
    new Recipe('Pasta Bolognese', 
    'BOLOGNESE!', 
    'https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/baae41c24d12e557bcc35c556049f43b/Spaghetti_Bolognese_Lifestyle_Full_Bleed_Recipe_Image__1__copy.jpg?w=2000&h=1500&fm=jpg&fit=thumb&q=90&fl=progressive'
    )
  ];

  @Output() selectedRecipeInList = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.selectedRecipeInList.emit(recipe);
    console.log('Recipe list: '+ recipe.name);
  }

}
