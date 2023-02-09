import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeSection: boolean = true;
  shoppingListSection: boolean = false;

  switchSection(event: string){
    this.recipeSection = event == 'recipe';
    this.shoppingListSection = event == 'shoppingList';
  }
}
