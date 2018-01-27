import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel', 
            'A yummy Schnitzel', 
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)                
            ] 
        ),
        new Recipe(
            'Big Burger', 
            'A yummy Big Burger', 
            'https://i.ytimg.com/vi/dKjtVqLLLR0/hqdefault.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)              
            ] 
        ),
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }


}