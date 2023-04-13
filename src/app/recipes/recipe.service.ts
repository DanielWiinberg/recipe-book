import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private savedRecipes: Recipe[] = [
    new Recipe('Pasta Carbonara', 
    'Pasta with bacon and cheese', 
    'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1558_1_1436795948.jpg?tr=w-800,h-1066',
    [
      new Ingredient('Pasta', 500),
      new Ingredient('Parmesan', 50),
      new Ingredient('Bacon', 200)
    ]
    ),
    new Recipe('Pasta Bolognese', 
    'BOLOGNESE!', 
    'https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/baae41c24d12e557bcc35c556049f43b/Spaghetti_Bolognese_Lifestyle_Full_Bleed_Recipe_Image__1__copy.jpg?w=2000&h=1500&fm=jpg&fit=thumb&q=90&fl=progressive',
    [
      new Ingredient('Pasta', 500),
      new Ingredient('Meat', 500),
      new Ingredient('Canned Tomatoes', 1)
    ]
    )
  ];

  getRecipes() {
    // return a copy of the savesRecipes array
    return [...this.savedRecipes];
  }

  getRecipe(index: number){
    return {...this.savedRecipes[index]};
  }

}