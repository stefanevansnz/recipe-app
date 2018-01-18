import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedListRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
      new Recipe('A Test Recipe 1', 'A simple Test 1', 'http://images.media-allrecipes.com/images/75131.jpg' ),
      new Recipe('A Test Recipe 2', 'A simple Test 2', 'http://images.media-allrecipes.com/images/75134.jpg' )
  ];
  
  constructor() { };

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    //console.log('selected ' + recipe.name);
    this.selectedListRecipe.emit(recipe);
  }

}
