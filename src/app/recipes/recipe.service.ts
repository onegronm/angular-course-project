import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 10)
        ]),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
        [
            new Ingredient('Buns',1),
            new Ingredient('Meat',1)
        ])
    ];

    constructor(private slService: ShoppingListService){
        
    }

    getRecipes(){
        return this.recipes.slice(); // returns a copy to not modify the underlying reference
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredients(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}