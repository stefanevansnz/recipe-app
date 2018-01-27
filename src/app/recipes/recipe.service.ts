import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'A simple Test 1', 'http://images.media-allrecipes.com/images/75131.jpg' ),
        new Recipe('A Test Recipe 2', 'A simple Test 2', 'http://images.media-allrecipes.com/images/75134.jpg' )
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }


}