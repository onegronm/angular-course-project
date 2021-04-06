import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563')
        ,new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563')
    ];

    getRecipes(){
        return this.recipes.slice(); // returns a copy to not modify the underlying reference
    }
}