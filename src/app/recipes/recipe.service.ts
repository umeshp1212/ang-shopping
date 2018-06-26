import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Alexa Single-Seater Sofa',
            'Teak Veneer in Clear Stained High Gloss Lamination',
            'http://erpwebservice.della.in:81/dellastore/ProductImages/HOME52603_107.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Leora Single-Seater Sofa',
            'Decorated with Golden Rectangular Buttons. Body covered in plush fabric in Kamilla Snow colour. Legs in Lion Carving Finished in Gold Gilding',
            'http://erpwebservice.della.in:81/dellastore/ProductImages/HOME52620_172.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }


}